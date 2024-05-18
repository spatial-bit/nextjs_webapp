'use client';

import React, { useEffect, useState } from 'react';
import { useItemId } from "@/context/ItemContext";

export default function ItemDisplay(params) {
  const itemId = useItemId();
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log('ItemDisplay: itemId=', itemId)
    const data = { 
      "id": itemId, 
      "name": `Item ${itemId}`, 
      "description": `Description ${itemId}` 
    };
    setItem(data);
  }, [itemId]);

  return (
    <div className='flex flex-column m-5'>
      <div>Id: {item.id}</div>
      <div>Name: {item.name}</div>
      <div>Description: {item.description}</div>
    </div>
  );
}