"use client";

// import type { Metadata } from "next";
// import localFont from "next/font/local";
import { ThemeModeScript } from "flowbite-react";
import "@radix-ui/themes/styles.css";
import "./globals.css";
// import Providers from "@/store/Provider";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div>{children}</div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
