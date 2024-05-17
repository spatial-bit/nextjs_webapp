# Step 1. How to create HelloWorld app

This covers how to create a HelloWorld app for PrimeReact with Next.JS (without TypeScript).

# Step 1. Create project
Here are instructions to setup prime with:  
```
cd src
npx create-next-app@latest <my_app>
    Typscript? No
    ESLint? Yes
    Tailwind CSS? Yes
    src/ dir? Yes
    App Router? Yes
    customize import alias? No
npm install primereact
npm run dev
```
Note: the instruction is `npx create-next-app@latest .` and not `npm create-next .`
## Dependencies
```
cd <my_app>
npm install primereact primeflex primeicons
npm run dev
```
## Configuration
Next you need to configure a few things:
### globals.css
Change contents of globals.css:
```
// Delete everything
```

### layout.js
Change contents of layout.js:
```
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import 'primereact/resources/themes/saga-blue/theme.css';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
  
export const metadata = {
  title: "Hello App",
  description: "This is a simple app",
};
  
export default function RootLayout({ children }) {
  return (
      <html lang="en">
            <head>
                {/* <link id="theme-link" rel="stylesheet" href="primereact/resources/themes/bootstrap4-dark-blue/theme.css"/> */}
            </head>
            <body>
                <PrimeReactProvider>
                    {children}
                </PrimeReactProvider>
            </body>
        </html>
  );
}
```
### page.js
Change contents of page.js:
```
import { Button } from 'primereact/button'; 

export default function Home() {
  return (
    <div>
        <Button label="Click me" />
    </div>
  );
}
```

# Run it
To run it:
```
npm run dev
```