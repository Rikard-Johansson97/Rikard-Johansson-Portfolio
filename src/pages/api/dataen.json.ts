import { NextApiRequest, NextApiResponse } from 'next';
import dataen from '../../../data/dataen.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(dataen);
}