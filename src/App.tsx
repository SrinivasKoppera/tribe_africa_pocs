import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponent from "./components/carousel-one/carousel-screen";
import CharmingHotelsCarouselComponent from "./components/carousel-two/carousel-screen";
import BusinessCarousel from "./components/carousel-three/carousel-screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarouselComponent />} />
        <Route path="/hotels" element={<CharmingHotelsCarouselComponent />} />
        <Route path="/business" element={<BusinessCarousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
