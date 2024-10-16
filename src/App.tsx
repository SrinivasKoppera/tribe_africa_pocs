import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselContainer from "./components/carousel-one/carousel-container";
import CharmingHotelsCarouselContainer from "./components/carousel-two/carousel-container";
import BusinessCarouselContainer from "./components/carousel-three/carousel-container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarouselContainer />} />
        <Route path="/hotels" element={<CharmingHotelsCarouselContainer />} />
        <Route path="/business" element={<BusinessCarouselContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
