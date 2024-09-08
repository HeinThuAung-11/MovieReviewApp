import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Nav />
          <main className="max-w-screen-xl mx-auto p-4">{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
