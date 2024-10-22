import { IoChevronForwardOutline } from "react-icons/io5";
import brand from "../assets/brand.png";


const Header = () => {
  return (
    <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${brand.src})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Shop</h2>
        <div className="flex items-center text-lg">
          <p>Beautifo</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Shop</p>
        </div>
      </header>
  )
}

export default Header