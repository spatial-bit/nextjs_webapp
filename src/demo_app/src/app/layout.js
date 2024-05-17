import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export const metadata = {
  title: "Simple App",
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