import { AppProps } from 'next/app';

import 'styles/globals.css';
import 'styles/style.css';
import 'styles/style.layouts.css';
import 'styles/style.content-blocks.css';
import 'styles/transition.css';
import Transition from "../components/transition";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
