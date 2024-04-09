import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
  return (
    <div className="container text-white text-center flex  items-center justify-center flex-col mt-40 h-full">
      <h1>404 - Page Not Found</h1>
      <p className='my-4'>The page you are looking for does not exist.</p>
      <Link href="/" className='px-8 py-1.5 bg-button-primary text-white rounded-sm mr-4'>Audit Now</Link>
    </div>
  );
};

export default Custom404
