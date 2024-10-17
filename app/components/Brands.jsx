import Image from 'next/image';
import brand1 from '../assets/brand1.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';

const Brands = () => {
  return (
    <div className="container mx-auto px-3 mt-20 mb-20 overflow-hidden">
      <div className="flex items-center gap-10 animate-scroll whitespace-nowrap">
        <Image src={brand1} width={150} height={150} alt="Brand 1" className="mx-auto opacity-60" />
        <Image src={brand2} width={150} height={150} alt="Brand 2" className="mx-auto opacity-60" />
        <Image src={brand3} width={150} height={150} alt="Brand 3" className="mx-auto opacity-60" />
        <Image src={brand4} width={150} height={150} alt="Brand 4" className="mx-auto opacity-60" />
        <Image src={brand5} width={150} height={150} alt="Brand 5" className="mx-auto opacity-60" />
        <Image src={brand6} width={150} height={150} alt="Brand 6" className="mx-auto opacity-60" />
        {/* Repeat logos for a seamless scroll */}
        <Image src={brand1} width={150} height={150} alt="Brand 1" className="mx-auto opacity-60" />
        <Image src={brand2} width={150} height={150} alt="Brand 2" className="mx-auto opacity-60" />
        <Image src={brand3} width={150} height={150} alt="Brand 3" className="mx-auto opacity-60" />
        <Image src={brand4} width={150} height={150} alt="Brand 4" className="mx-auto opacity-60" />
        <Image src={brand5} width={150} height={150} alt="Brand 5" className="mx-auto opacity-60" />
        <Image src={brand6} width={150} height={150} alt="Brand 6" className="mx-auto opacity-60" />
      </div>
    </div>
  );
}

export default Brands;
