import { Transition } from "../components/transition";
import type { AppProps } from "next/app";
import "/lib/base.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </RecoilRoot>
    </div>
  );
}
