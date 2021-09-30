import App from "../components/App";
import "../components/molecules/NewPetCard/styles.css";
import "../components/molecules/Modal/styles.css";
import "../components/organisms/Dashboard/styles.css";
import "../components/molecules/ServicesList/styles.css";
import "../components/molecules/Header/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
