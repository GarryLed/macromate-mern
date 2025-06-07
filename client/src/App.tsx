
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
     <Header />
      <Navbar />
      <MainContent />
      <Footer />
      <Outlet /> {/* Outlet for nested routes */}
    </div>
  );
}

