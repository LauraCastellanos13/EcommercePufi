import nap from "../img/sleep.png";
const PufiNap = () => {
    return (
        <div className="container-rain-pufi">
            <div className="rain-total">
                <img src={nap} className="rain-pufi" alt="pufi-puff" />{" "}
                <h3>Pufi NAP</h3>
                <hr className="line-rain" />
                <p className="paragraph-rain">
                    Descripción del producto.<br/>
                    Este es un texto simulado
                </p>
                <p className="paragraph-rain-more"> &gt; VER MÁS</p>
            </div>
            <div className="container-nap-img">
                <p className="paragraph-shop">SHOP</p>
            </div>
        </div>
    );
};

export default PufiNap;