import { NextApiRequest, NextApiResponse } from 'next';
import datase from '../../../data/datase.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(datase);
}