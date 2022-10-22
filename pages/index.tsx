import type { NextPage } from 'next';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setLoading } from '@/store/feature/init';
import { useEffect } from 'react';
import Loading from '@/components/Loading';

const Home: NextPage = () => {
  const globalLoading = useAppSelector((state) => state.init.globalLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loading = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(loading);
  }, [dispatch, globalLoading]);
  return (
    <Loading>
      <h1>This is Home</h1>
    </Loading>
  );
};

export default Home;
