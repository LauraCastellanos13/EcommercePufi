import puff from "../img/puff.png";

const PufiPuff = () => {
    return (
        <div className="container-rain-pufi">
            <div className="rain-total">
                <img src={puff} className="rain-pufi" alt="pufi-puff" />{" "}
                <h3>Pufi PUFF</h3>
                <hr className="line-rain" />
                <p className="paragraph-rain">
                    Descripción del producto.<br/>
                    Este es un texto simulado
                </p>
                <p className="paragraph-rain-more"> &gt; VER MÁS</p>
            </div>
            <div className="container-puff-img">
            </div>
        </div>
    );
};

export default PufiPuff;