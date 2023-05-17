import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About Us/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminMessage from "./components/Admin/AdminMessage";
import RegisteredUser from "./components/Admin/RegisteredUser";
import AddGallery from "./components/Admin/AddGallery";
import GalleryContent from "./components/Gallery/GalleryContent";
import Event from "./components/Home/Event";
import AddEvent from "./components/Admin/AddEvent";
import AdminLogin from "./components/Admin/AdminLogin";
import Delegateform from "./components/Register/Delegateform";
import AwardForm from "./components/Register/AwardForm";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/event/:id" element={<Event />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route
          exact
          path={`/gallery/gallery/:id`}
          element={<GalleryContent />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/delegate" element={<Delegateform />} />
        <Route exact path="/award" element={<AwardForm />} />


        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />

        <Route exact path="/admin/messages" element={<AdminMessage />} />

        <Route exact path="/admin/register" element={<RegisteredUser />} />

        <Route exact path="/admin/gallery" element={<AddGallery />} />

        <Route exact path="/admin/event" element={<AddEvent />} />

        <Route exact path="/admin/login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
