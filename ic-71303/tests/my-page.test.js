import MyPage from './pages/my-page'; // Đường dẫn đến page
import { render, screen } from '@testing-library/react';

describe('MyPage', () => {
    test('renders correctly', () => {
        render(<MyPage />);
        expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    });

    test('shows error message on API failure', async () => {
        jest.mock('./api/my-api', () => ({
            fetchData: jest.fn(() => Promise.reject(new Error('500 Internal Server Error'))),
        }));

        render(<MyPage />);
        
        expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });
});
