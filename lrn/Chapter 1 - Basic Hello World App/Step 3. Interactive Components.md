# Step 3. Interactive Components

Now, we will make one component talk to another via context and deep link.

3 steps include:
1. Creating an ItemContext to listen to query params
2. Wrapping layout in that context
3. Wiring the ItemDisplay to listen for that context

Note: the 4th step, including the item id in the query param was already done.

## #1 ItemContext

```
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
```

## #2 Wrapping layout in context

```
      <body>
        <PrimeReactProvider>
          <ItemIdProvider>
            {children}
          </ItemIdProvider>
        </PrimeReactProvider>
      </body>
```

## #3 Listening to context

in ItemDisplay.jsx:
```
import { useItemId } from "@/context/ItemContext";

export default function ItemDisplay(params) {
  const itemId = useItemId();
```