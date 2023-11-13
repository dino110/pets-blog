import Head from "next/head";
import Header from "./components/Header/Header";
import FactsSection from "./components/FactsSection/FactsSection";
import CookieConsent from "react-cookie-consent";
import CarouselSection from "./components/Gallery/CarouselSection";
import GallerySection from "./components/Gallery/GallerySection";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>EY pet lover</title>
        <meta name="description" content="Dogs and cats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <FactsSection />
        <CarouselSection />
        <GallerySection />
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="I agree"
          buttonStyle={{ borderRadius: "5px" }}
          expires={365}
        >
          This site uses cookies.
        </CookieConsent>
      </main>
    </>
  );
}
