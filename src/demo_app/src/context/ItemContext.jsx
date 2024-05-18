'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

export const ItemIdContext = createContext(null);

export const ItemIdProvider = ({ children }) => {
    const searchParams = useSearchParams();
    
    const [itemId, setItemId] = useState('');

    useEffect(() => {
        const data = searchParams.get('itemId');
        if (data) setItemId(data);
    }, [searchParams]);

    return (
        <ItemIdContext.Provider value={itemId}>
            {children}
        </ItemIdContext.Provider>
    );
};

export const useItemId = () => useContext(ItemIdContext);