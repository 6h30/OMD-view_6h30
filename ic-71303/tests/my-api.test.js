import handler from 'https://ic71303-hide.onrender.com/api/user/login';
import { createMocks } from 'node-mocks-http';

describe('API Route: user login', () => {
  test('returns 200 on successful login', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getData()).toEqual(
      expect.objectContaining({
        message: 'Login successful',
        user: expect.any(Object), // Thay đổi tùy theo dữ liệu trả về
      })
    );
  });

  test('returns 401 on failed login', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'wronguser',
        password: 'wrongpassword',
      },
    });

    await handler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getData()).toEqual({ message: 'Invalid credentials' });
  });

  test('returns 500 on error', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    });

    // Giả lập lỗi, nếu cần
    jest.spyOn(console, 'error').mockImplementation(() => {});

    // Giả lập hàm để gây lỗi
    await handler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getData()).toEqual({ message: 'Internal Server Error' });
  });
});
