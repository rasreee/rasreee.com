import "./styles/main.scss";
import localFont from "@next/font/local";
import Header from "components/module/header";
import classes from "lib/classes";
import type { PropsWithChildren } from "react";
import AppProvider from "./provider";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/woff2/PretendardVariable.woff2",
  variable: "--font-sans",
  display: "swap",
});

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html className={classes("root", pretendard.className)} lang="en">
      <body className="w-full px-7 py-4 aboveMobile:mx-auto aboveMobile:max-w-[80ch] aboveMobile:py-7">
        <AppProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
};

export default AppLayout;
