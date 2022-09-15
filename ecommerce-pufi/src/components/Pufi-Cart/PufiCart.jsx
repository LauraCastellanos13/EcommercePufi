import cart from "../img/bolsas-de-compra.png";

const PufiCart = () => {
    return (
        <div className="container-rain-pufi">
            <div className="container-cart-img">
                <p className="paragraph-shop">SHOP</p>
            </div>
            <div className="rain-total">
                <img src={cart} className="rain-pufi" alt="pufi-rain" />{" "}
                <h3>Pufi CART</h3>
                <hr className="line-rain" />
                <p className="paragraph-rain">
                    Descripción del producto. <br/>
                    Este es un texto simulado
                </p>
                <p className="paragraph-rain-more"> &gt; VER MÁS</p>
            </div>
        </div>
    );
};

export default PufiCart;