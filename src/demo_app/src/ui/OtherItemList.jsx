'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function OtherItemList(params) {
  const [items, setItems] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const data = [
      { "id": 1, "name": "Other 1", "description": "Description 1" },
      { "id": 2, "name": "Other 2", "description": "Description 2" },
      { "id": 3, "name": "Other 3", "description": "Description 3" },
    ];
    setItems(data);
  }, []);

  return (
    <div className='flex flex-column'>
      {items.map((item) => (
        <div key={item.id} className='flex flex-row p-2' onClick={() => router.push(`?itemId=${item.id}`)}>
          <div className='p-1'>{item.id}</div>
          <div className='p-1'>{item.name}</div>
        </div>
      ))}
    </div>
  );
}