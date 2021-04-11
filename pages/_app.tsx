import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

import 'tailwindcss/tailwind.css';

const Frame: React.FC = ({ children }) => <>{children}</>;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Frame>
    <GlobalStyles />
    <Component {...pageProps} />
  </Frame>
);

export default App;
