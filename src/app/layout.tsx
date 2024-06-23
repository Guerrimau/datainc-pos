import type { Metadata } from "next";
import ThemeRegistry from "@/styles/theme-registry";

export const metadata: Metadata = {
  title: "DataInc",
  description: "Punto de venta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
