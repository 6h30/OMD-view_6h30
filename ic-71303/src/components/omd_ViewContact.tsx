import React, { useEffect } from 'react';
import { checkSession } from '../utils/auth';

const ViewContact: React.FC = () => {
    useEffect(() => {
        const verifySession = async () => {
            const response = await checkSession();

            if (response) {
                // Xử lý thông tin người dùng
                console.log('User data:', response);
            } else {
                // Người dùng chưa đăng nhập hoặc phiên đã hết hạn
                console.log('Phiên đã hết hạn');
            }
        };

        verifySession();
    }, []);

    return (
        <div>
            {/* Các component khác */}
        </div>
    );
};

export default ViewContact;
