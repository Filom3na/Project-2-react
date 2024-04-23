import { Outlet } from "react-router-dom";

//Import the custom components here
import Navbar from "./components/subcomponents/Navbar";
import Footer from "./components/subcomponents/Footer";

export default function Root() {

  

  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*Add d-flex and flex-column below if there are alignment issues  */}
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
