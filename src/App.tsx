import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselContainer from "./components/carousel-one/carousel-container";
import BusinessCarouselContainer from "./components/carousel-three/carousel-container";
import BusinessFriendlyCarouselContainer from "./components/carousel-four/carousel-container";
import CharmingHotelsCarousel from "./components/carousel-two/carousel-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/hotels" element={<CharmingHotelsCarousel />} />
        <Route path="/business" element={<BusinessCarouselContainer />} />
        <Route
          path="/business-friendly"
          element={<BusinessFriendlyCarouselContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
