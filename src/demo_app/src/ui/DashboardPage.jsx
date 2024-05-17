'use client';

import React from 'react';
import ItemList from './ItemList';
import ItemDisplay from './ItemDisplay';
import OtherItemList from "./OtherItemList";

export default function CollectionPage(params) {

  return (
  <div className='flex flex-column'>
    <div>
      Dashboard
    </div>
    <div className='flex flex-row'>
      <ItemList />
      <ItemDisplay itemId={1}/>
      <OtherItemList/> 
    </div>
  </div>
  );
}