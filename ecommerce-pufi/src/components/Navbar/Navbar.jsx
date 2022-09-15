import logo from "../img/PUFI-logo.png";
import cart from "../img/cart-nav.png";
import puff from "../img/puff__nav.png";
import rain from "../img/umbrella-nav.png";
import nap from "../img/nap-nav.png";
import point from "../img/point.png";

const Navbar = () => {
    return (
        <div className="container-principal-home">
            <div className="container-one-home">
                <div id="pufi">
                    <img src={logo} className="logo-pufi" alt="logo" />
                </div>
                <div className="container-two-h">
                    <ul className="list-home">
                        <li className="pufi-puff-h">
                        <img src={puff} className="logo-home-puf" alt="pufi" />
                        <a className="nav-link-h">PUFI PUFF</a>
                        </li>
                        <li className="pufi-rain-h">
                        <img src={rain} className="logo-home-puf" alt="pufi" />
                        <a className="nav-link-h">PUFI RAIN</a>
                        </li>
                        <li className="pufi-cart-h">
                        <img src={cart} className="logo-home-puf" alt="pufi" />
                        <a className="nav-link-h">PUFI CART</a>
                        </li>
                        <li className="pufi-nap-h">
                        <img src={nap} className="logo-home-puf" alt="pufi" />
                        <a className="nav-link-h">PUFI NAP</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-first-three">
                    <p className="nav-cuenta"> MI CUENTA </p>
                    <p className="nav-cuenta"> |</p>
                    <p className="nav-cuenta"> MI COMPRA</p>
                </div>
            </div>
            <div className="container-three-home">
                <h1 className="principal-title">
                    ESTAR CÓMODO,<br />
                    NUNCA FUE TAN FÁCIL.
                </h1>
                <div className="container-button">
                    <button className="button-shop">SHOP</button>
                </div>
                <div className="ponits">
                    <img src={point} className="point" alt="point" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;