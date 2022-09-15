import collage from "../img/collage.jpg";
const Espufi = () => {
    return (
        <div className="news">
        <div className="">
        <h6 className="title-newsletter">INSTAGRAM</h6>
        <h1 className="subsc">#ESPUFI</h1>
        </div>

            <div className="collage-espufi">
                <img src={collage} className="collagepufi" alt="collage-puff" />{" "}
            </div>
            <h6 className="title-newsletter">NEWSLETTER</h6>
            <h1 className="subsc">SUSCRIBETE</h1>
            <h6 className="text-news">Y enterate de todas las novedades</h6>
        </div>

    );
};

export default Espufi;