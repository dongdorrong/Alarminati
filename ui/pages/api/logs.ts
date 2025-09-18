// ui/pages/api/logs.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { cluster: 'k8s-dev-1', status: 'ok', time: '2025-09-18T03:21:00Z' },
    { cluster: 'k8s-prod-1', status: 'ok', time: '2025-09-18T03:22:00Z' }
  ])
}

