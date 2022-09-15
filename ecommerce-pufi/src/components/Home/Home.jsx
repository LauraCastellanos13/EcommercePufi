import "./Home.css";
import Newsletter from "../Newsletter/Newsletter";
import PufiRain from "../Pufi-Rain/PufiRain";
import Navbar from "../Navbar/Navbar";
import PufiPuff from "../Pufi-Puff/PufiPuff";
import PufiCart from "../Pufi-Cart/PufiCart";
import PufiNap from "../Puffi-Nap/PuffiNap"
import Espufi from "../Espufi/Espufi";
import FooterPufi from "../Footer-Pufi/FooterPufi";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />      
      <PufiRain />        
      <PufiPuff />
      <PufiCart />
      <PufiNap />
      <Espufi />
      <Newsletter />
      <FooterPufi />
    </div>
  );
}
export default Home;