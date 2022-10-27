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
      <div className={style.loginContainer}>
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
        <p className="text-xs text-[#878787]">
          <span>用戶進行登入後，則視同同意我們的</span>
          <span className="underline">
            <a href="/privacy-policy" target="_blank">
              隱私政策
            </a>
          </span>
          <span>及</span>
          <span className="underline">
            <a href="/terms-n-conditions" target="_blank">
              條款及細則
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
