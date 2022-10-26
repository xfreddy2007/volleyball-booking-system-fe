import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.send({ content: 'Login Sucess!!' });
  } else {
    res.send({ error: 'Login failed!!!' });
  }
};
