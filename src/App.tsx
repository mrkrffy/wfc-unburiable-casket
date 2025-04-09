import Logo from "@/components/Logo";
import Banner from "@/components/Banner/Banner";
import CampaignMessage from "@/components/CampaignMessage";
import MainVideo from "@/components/MainVideo";
import Stories from "@/components/Stories/Stories";
import Footer from "@/components/Footer";
import SupportCampaign from "./components/SupportCampaign";

const App = () => {
  return (
    <>
      <Logo />
      <Banner />
      <CampaignMessage />
      <MainVideo />
      <Stories />
      <SupportCampaign />
      <Footer />
    </>
  );
};

export default App;
