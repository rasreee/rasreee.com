import "styles/main.scss";
import AppLayout from "components/app/app-layout";
import AppProvider from "components/app/app-provider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
}
