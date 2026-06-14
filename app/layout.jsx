import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/cliente";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
