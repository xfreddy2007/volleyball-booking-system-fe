/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateUserInfo } from '@/store/feature/auth';
import { setLoading } from '@/store/feature/init';
import Loading from '@/components/Loading';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import SignInForm from '@/components/SignInForm';
import AccountPage from '@/components/AccountPage';

const Account: NextPage = () => {
  // initial add dark mode class
  const playerData = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // get user login info
  const { data: session, status } = useSession();
  useEffect(() => {
    switch (status) {
      case 'authenticated':
        dispatch(updateUserInfo(session.user));
        dispatch(setLoading(false));
        break;
      case 'unauthenticated':
        dispatch(setLoading(false));
        break;
      case 'loading':
      default:
        dispatch(setLoading(true));
    }
  }, [dispatch, session, status]);

  return (
    <Loading>
      {status === 'unauthenticated' && (
        <div className="h-full w-full">
          <SignInForm />
        </div>
      )}
      {status === 'authenticated' && <AccountPage />}
    </Loading>
  );
};

export default Account;
