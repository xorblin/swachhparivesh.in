import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Index from "./Pages/Index";
import Gallery from "./Pages/Gallery";
import Media from "./Pages/Media";
import Goal from "./Pages/Goal";
import Donation from "./Pages/Donation";
import Events from "./Pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
