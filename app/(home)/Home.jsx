import Nav from "../components/Nav"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import image1 from '../assets/img-2.png';
import image2 from '../assets/img-3.png';


const Home = () => {
  return (
    <div>
        <Nav />
        <header className="">
          <Carousel>
            <div>
              <Image src={image1}
              width={500}
              height={500}
              alt="Picture a beautiful girl with skincare product"
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={image2} />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </header>
    </div>
  )
}

export default Home