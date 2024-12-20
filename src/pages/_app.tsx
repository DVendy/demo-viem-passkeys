import { AppProps } from "next/app";
import Head from "next/head";

import { TurnkeyProvider } from "@turnkey/sdk-react";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/config/wagmi";
import { turnkeyConfig } from "@/config/turnkey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "@/components/appProvider";

function DemoViemPasskeys({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <div>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <TurnkeyProvider config={turnkeyConfig}>
            <AppProvider>
              <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
              </Head>
              <Component {...pageProps} />
            </AppProvider>
          </TurnkeyProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default DemoViemPasskeys;
