import type { NextPage } from 'next';
import { useAppSelector } from '@/store/hooks';

const Events: NextPage = () => {
  // initial add dark mode class
  const playerData = useAppSelector((state) => state.auth);
  console.log(playerData);
  return (
    <div>
      <h1>This is Events</h1>
    </div>
  );
};

export default Events;
