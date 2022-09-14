import "./Home.css";
import Newsletter from "../Newsletter/Newsletter";
import PufiRain from "../Pufi-Rain/PufiRain";
import Navbar from "../Navbar/Navbar";

export const Home = () => {
    return(
        <div className="home">
        <Navbar />
        <PufiRain />
        <Newsletter />
      </div>
    );
}
export default Home;