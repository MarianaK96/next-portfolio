import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import styles from "styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={styles}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
