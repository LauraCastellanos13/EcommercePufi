import seguro from "../img/paraguas.png";

const PufiRain = () => {
    return (
        <div className="container-rain-pufi">
            <div className="container-rain-img">
                <p className="paragraph-shop">SHOP</p>
            </div>
            <div className="rain-total">
                <img src={seguro} className="rain-pufi" alt="puffi-rain" />{" "}
                <h3>Pufi RAIN</h3>
                <hr className="line-rain" />
                <p className="paragraph-rain">
                    Descripción del producto. Este es <br />
                    un texto simulado
                </p>
                <p className="paragraph-rain-more"> > VER MÁS</p>
            </div>
        </div>
    );
};

export default PufiRain;
