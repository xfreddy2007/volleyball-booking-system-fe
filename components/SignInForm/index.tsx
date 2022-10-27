import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import EmailIcon from '@/assets/icons/icon-login-letter.png';
import GoogleIcon from '@/assets/icons/icon-login-google.png';
import FacebookIcon from '@/assets/icons/icon-login-facebook.png';
import LineIcon from '@/assets/icons/icon-login-line.jpeg';
import style from './SignInForm.module.scss';

const SignInForm: React.FC = () => {
  return (
    <div className={style.root}>
      <h1 className="mb-2 text-3xl font-extrabold text-navy">登入</h1>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <button onClick={() => signIn()} className={style.button}>
          <Image src={EmailIcon} width={36} height={36} />
          以Email登入
        </button>
        <button onClick={() => signIn()} className={style.button}>
          <Image src={GoogleIcon} width={36} height={36} />
          以Google帳戶登入
        </button>
        <button onClick={() => signIn()} className={style.button}>
          <Image src={FacebookIcon} width={36} height={36} />
          以Facebook帳戶登入
        </button>
        <button onClick={() => signIn()} className={style.button}>
          <Image src={LineIcon} width={36} height={36} />
          以Line帳戶登入
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
