import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div className="m-10 flex gap-2">
      <Link href="/panel">
        <Button variant="filled" size="large" color="geekblue">
          داشبورد
        </Button>
      </Link>
      <Link href="/signin">
        <Button variant="filled" size="large" color="magenta">
          لاگین
        </Button>
      </Link>
    </div>
  );
};

export default Main;
