import Page from "../template/Pagina";
import Perks from "./Benefits";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimony";

export default function Landing() {
  return (
    <Page externa>
      <Header />
      <Featured />
      <Perks />
      <Testimonials />
      <Footer />
    </Page>
  );
}
