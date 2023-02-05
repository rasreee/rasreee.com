import localFont from "@next/font/local";
import AppHead from "./app-head";

const pretendard = localFont({
  src: "../../public/fonts/pretendard/woff2/PretendardVariable.woff2",
  variable: "--font-sans",
  display: "swap",
});

export type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHead />
      <main className={pretendard.className}>{children}</main>
    </>
  );
};

export default AppLayout;
