import "@mantine/core/styles.css";
// all the other mantine style should go here, after core and before global css

// import "@mantine/dates/styles.css";
// import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="bottom-center" />
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
