'use client'

import React, { useEffect, useState, useContext } from "react";
import Header from '@/ui/header';
import ItemList from '@/ui/ItemList';
import ItemDisplay from '@/ui/ItemDisplay';
import OtherItemList from '@/ui/OtherItemList';

export default function DashboardLayout({children,}) {
    const [iconTheme, setIconTheme] = useState();

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        setIconTheme(theme);
    }, []);
    
    return (
        <div className='flex flex-column'>
            <Header iconTheme={iconTheme} setIconTheme={setIconTheme}/>
            <div>
                Dashboard
            </div>
            <div className='flex flex-row'>
                <ItemList />
                <ItemDisplay />
                <OtherItemList/>
            </div>
        </div>
    );
}