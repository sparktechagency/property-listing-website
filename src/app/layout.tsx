import type { Metadata } from "next"; 
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ConfigProvider } from "antd";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Listing Website",
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
        </AntdRegistry>
      </body>
    </html>
  );
}
