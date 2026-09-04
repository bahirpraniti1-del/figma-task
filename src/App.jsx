import Categories from "./components/layout/categories";
import CustomerReviews from "./components/layout/customer-reviews";
import FrequentlyOrdered from "./components/layout/frequently-ordered";
import GenericAlternative from "./components/layout/generic-alternative";
import Header from "./components/layout/header";
import Hero from "./components/layout/hero";
import MobileAppImage from "./components/layout/mobile-app";
import OfferCards from "./components/layout/OfferCards";
import PopularCategories from "./components/layout/popular-categories";
import TopDeals from "./components/layout/top-deals";
import TopSections from "./components/layout/top-section";
import TrendingNow from "./components/layout/trending-now";
import TrustSafty from "./components/layout/trust-safty";
import UnlockBetterHelp from "./components/layout/unlockBetter-help";

function App() {
  return (
    <>
      <TopSections />
      <OfferCards />
      <FrequentlyOrdered />
      <Categories />
      <PopularCategories />
      <TrendingNow />
      <TopDeals />
      <GenericAlternative />
      <UnlockBetterHelp />
      <TrustSafty />
      <MobileAppImage />
      <CustomerReviews />
    </>
  );
}

export default App;
