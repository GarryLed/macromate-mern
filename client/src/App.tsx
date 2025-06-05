
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import Card from "./components/Card"; // Card component import 

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
        <Card text="Total Meals Logged" count={42} /> 
      </main>
      <Footer />
    </div>
  );
}

