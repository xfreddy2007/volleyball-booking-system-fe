import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req });
  if (token) {
    res.send(JSON.stringify(token, undefined, 2));
  } else {
    res.status(401);
  }
  res.end();
};
