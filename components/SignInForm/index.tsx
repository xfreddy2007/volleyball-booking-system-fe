import React from 'react';
import { signIn } from 'next-auth/react';

const SignInForm: React.FC = () => {
  return (
    <div className="mx-auto my-auto flex w-[350px] flex-col gap-4 pt-24">
      <h1>請以以下方式登入</h1>
      <div>
        <button onClick={() => signIn()}>email</button>
      </div>
    </div>
  );
};

export default SignInForm;
