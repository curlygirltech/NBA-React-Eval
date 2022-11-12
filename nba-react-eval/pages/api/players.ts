import type { NextApiRequest, NextApiResponse } from 'next'
import {players} from '../data'

type Data = {
  
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json( players )
}