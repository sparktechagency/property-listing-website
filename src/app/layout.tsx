import type { Metadata } from "next"; 
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ConfigProvider } from "antd";
import ReduxProvider from "@/redux/lib/ReduxProvider";
import { UserProvider } from "@/provider/User";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambitious",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${montserrat.className} antialiased`}
      >
        <AntdRegistry>  
        <ReduxProvider>    
        <UserProvider >
        <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#ffffff',
                    },
                    components: {},
                }}
            >
          {children} 
          </ConfigProvider>  
          </UserProvider>
          </ReduxProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
