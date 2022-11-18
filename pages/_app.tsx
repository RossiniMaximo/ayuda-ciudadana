import { AppProps } from "next/app";
import { Transition } from "../components/transition";
import "/lib/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
export default MyApp;
