// // utils/auth.ts

// interface LoginResponse {
//     success: boolean;
//     data?: { token?: string; user?: any };
//     message?: string;
// }

// export const login = async (email: string, password: string): Promise<LoginResponse> => {
//     try {
//         const response = await fetch('http://w3cyber.dev/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include', // Để gửi cookie - quan trọng
//             body: JSON.stringify({ email, password }), 
//         });

//         if (response.ok) {
//             const data = await response.json();
//             return { success: true, data };
//         } else {
//             const errorData = await response.json();
//             return { success: false, message: errorData.message || 'Login failed' };
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return { success: false, message: 'An error occurred' };
//     }
// };

// export const checkSession = async () => {
//     const response = await fetch('http://your-api-url/check-session', {
//         method: 'GET',
//         credentials: 'include', // Gửi cookie session
//     });

//     if (response.ok) {
//         const userData = await response.json();
//         // Xử lý thông tin người dùng, ví dụ lưu vào state hoặc context
//     } else {
//         // Người dùng chưa đăng nhập hoặc phiên đã hết hạn
//     }
// };


// utils/auth.ts

interface LoginResponse {
    success: boolean;
    data?: { token?: string; user?: string };
    message?: string;
}

const API_URL = 'http://w3cyber.dev';

const handleResponse = async (response: Response): Promise<LoginResponse> => {
    if (response.ok) {
        const data = await response.json();
        return { success: true, data };
    } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message || 'An error occurred' };
    }
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        return await handleResponse(response);
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'An error occurred during login' };
    }
};

export const checkSession = async (): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${API_URL}/check-session`, {
            method: 'GET',
            credentials: 'include',
        });

        return await handleResponse(response);
    } catch (error) {
        console.error('Session check error:', error);
        return { success: false, message: 'An error occurred while checking session' };
    }
};
