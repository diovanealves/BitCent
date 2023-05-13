import Page from "../template/Pagina";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";

export default function Landing() {
  return (
    <Page externa>
      <Header />
      <Featured />
      <Footer />
    </Page>
  );
}
