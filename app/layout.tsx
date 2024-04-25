import '@/app/ui/global.css';
import { Inter} from 'next/font/google';
import SideNav from '@/app/ui/dashboard/sidenav';
 
export const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} antialiased`}>{children}
      <SideNav/>
      </body>

    </html>
  );
}
