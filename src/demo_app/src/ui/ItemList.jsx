'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ItemList(params) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = [
      { "id": 1, "name": "Item 1", "description": "Description 1" },
      { "id": 2, "name": "Item 2", "description": "Description 2" },
      { "id": 3, "name": "Item 3", "description": "Description 3" },
      { "id": 4, "name": "Item 4", "description": "Description 4" },
      { "id": 5, "name": "Item 5", "description": "Description 5" }
    ];
    setItems(data);
  }, []);

  return (
    <div className='flex flex-column'>
      {items.map((item) => (
        // <div key={item.id} className='flex flex-row p-2' onClick={() => router.push(`?itemId=${item.id}`)}>
        //   <div className='p-1'>{item.id}</div>
        //   <div className='p-1'>{item.name}</div>
        // </div>
        <Link key={item.id} href={`?itemId=${item.id}`} passHref>
          <div key={item.id} className='flex flex-row p-2'>
            <div className='p-1'>{item.id}</div>
            <div className='p-1'>{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}