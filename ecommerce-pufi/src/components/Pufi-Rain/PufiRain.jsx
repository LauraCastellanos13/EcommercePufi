import paraguas from "../img/paraguas.png";

const PufiRain = () => {
    return (
        <div className="container-rain-pufi">
            <div className="container-rain-img">
                <p className="paragraph-shop">SHOP</p>
            </div>
            <div className="rain-total">
                <img src={paraguas} className="rain-pufi" alt="pufi-rain" />{" "}
                <h3>Pufi RAIN</h3>
                <hr className="line-rain" />
                <p className="paragraph-rain">
                    Descripción del producto.<br/>
                    Este es un texto simulado
                </p>
                <p className="paragraph-rain-more"> &gt; VER MÁS</p>
            </div>
        </div>
    );
};

export default PufiRain;
