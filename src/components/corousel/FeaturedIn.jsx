import "../sample.css";
/* import "../../styles/home.css"; */

function FeaturedIn() {
    const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    ];
    return (
        <div className="featured-in">
            <h2 className="white-title">OUR WORKS HAS BEEN FEATURED ON</h2>
            <div className="logo-carousel">
                <div className="logo-track">
                    {logos.concat(logos).map((logo, index) => (
                    <div className="logo-item" key={index}>
                        <img src={logo} alt={`logo-${index}`} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
    }

export default FeaturedIn;