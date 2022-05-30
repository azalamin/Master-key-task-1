import { Route, Routes } from "react-router-dom";
import AdFormate from "./components/AdFormate/AdFormate";
import BannerAd from "./components/AdFormate/BannerAd";
import Native from "./components/AdFormate/Native";
import PopUnder from "./components/AdFormate/PopUnder";
import Skim from "./components/AdFormate/Skim";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[#F8F8F8]">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AdFormate />}>
            <Route path="/" element={<PopUnder />} />
            <Route path="native" element={<Native />} />
            <Route path="banner-ad" element={<BannerAd />} />
            <Route path="skim" element={<Skim />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
