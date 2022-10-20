import type { NextPage } from 'next';
import { useAppSelector } from '@/store/hooks';

const Account: NextPage = () => {
  // initial add dark mode class
  const playerData = useAppSelector((state) => state.auth);
  console.log(playerData);
  return (
    <div>
      <h1>This is Account</h1>
    </div>
  );
};

export default Account;
