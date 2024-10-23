// src/pages/404.tsx

import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Trang này không tồn tại.</p>
      <Link href="/homeM">Go back to Home</Link>
    </div>
  );
};

export default Custom404;
