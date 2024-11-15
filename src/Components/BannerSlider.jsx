// slider assets
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

// images
// use .. because we were inside the component folder
// we have to use the .. to get out of the component folder into the assets
import skellies from "../assets/skeletons.jpg";
import pumpkins from "../assets/pumpkins.jpg";
import ghosts from "../assets/ghost.jpg";
function BannerSlider() {

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return( 
        <Slider {...settings} className="home-banner">
            <div>
                <img src={skellies} alt="Skeletons" />
            </div>
            <div>
                <img src={pumpkins} alt="Pumpkins" />
            </div>
            <div>
                <img src={ghosts} alt="Ghost" />
            </div>
        </Slider>
    );

}

export default BannerSlider;