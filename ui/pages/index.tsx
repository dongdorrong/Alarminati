// ui/pages/index.tsx
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alarminati 알람 로그</h1>
      <ul>
        {data.map((log, i) => (
          <li key={i} className="mb-2">
            [{log.time}] {log.cluster}: {log.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

