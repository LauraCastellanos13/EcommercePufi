import logo from "../img/PUFI-black.png";
import facebook from "../img/simbolo-de-la-aplicacion-de-facebook.png";
import twitter from "../img/gorjeo.png";
import instagram from "../img/instagram.png";
import seguridad from "../img/pago-seguro.png";
import qr from "../img/qr.png"

const FooterPufi = () => {
    return (
        <div>
            <footer className="footer-pufi">
                <div className="pufi-logo-home">
                    <img src={logo} className="logo-pufi-black" alt="logo-pufi" />
                </div>
                <div className="pufi-logos">
                    <p>PUFI RAIN</p>
                    <p>PUFI PUFF</p>
                    <p>PUFI CART</p>
                    <p>PUFI NAP</p>
                </div>
                <div className="contact-footer">
                    <p>CONTACTO</p>
                    <p>AYUDA</p>
                    <p>CÓMO COMPRAR</p>
                    <p>TÉRMINOS & CONDICIONES</p>
                </div>
                <div className="shopping-pufi">
                    <p>COMPRA 100% SEGURA</p>
                    <img src={seguridad} className="social-networks-logo" alt="logo-seguridad" />
                    <img src={qr} className="social-networks-logo" alt="logo-qr" />
                </div>
                <div className="follow-us">
                    <p className="paragraph-footer">SEGUINOS EN</p>
                    <img src={facebook} className="social-networks-logo" alt="logo-facebook" />
                    <img src={twitter} className="social-networks-logo" alt="logo-twitter" />
                    <img src={instagram} className="social-networks-logo" alt="logo-instagram" />
                </div>
            </footer>
        </div>
    );
};

export default FooterPufi;