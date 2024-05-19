import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { ItemIdProvider } from "@/context/ItemContext";

export const metadata = {
    title: "Hello App",
    description: "This is a simple app",
};

export default function RootLayout({ children, serverContext }) {
    return (
      <html lang="en">
            <head>
                {/* <link id="app-theme" rel="stylesheet" href="/themes/mdc-dark-indigo/theme.css"/> */}
            </head>
            <body>
                <PrimeReactProvider>
                    <ItemIdProvider>
                        {children}
                    </ItemIdProvider>
                </PrimeReactProvider>
            </body>
        </html>
  );
}