import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import { ThemeProvider } from "./components/theme-provider";
import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <body className="dark:bg-gray-800">
            <Nav />
            <main className="max-w-screen-xl mx-auto p-4 dark:text-white dark:bg-gray-800">{children}</main>
          </body>
        </ThemeProvider>
      </html>
    </StoreProvider>
  );
}
