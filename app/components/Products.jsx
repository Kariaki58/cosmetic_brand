import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { VscGitCompare } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import skincare1 from '../assets/skincare1.jpg';
import skincare2 from '../assets/skincare2.jpg';
import skincare3 from '../assets/skincare3.jpg';
import skincare4 from '../assets/skincare4.jpg';
import skincare5 from '../assets/skincare5.jpg';


const Products = () => {
    return (
        <>
            <section className="text-center my-10">
                <h1 className="font-bold text-2xl text-gray-800">Featured Products</h1>
                <div className="flex gap-4 justify-center mt-6">
                    <button className="bg-[#FA9090] text-white px-6 py-2 rounded-full transition duration-300">All</button>
                    <button className="hover:bg-[#FA9090] hover:text-white px-6 py-2 rounded-full transition duration-300">For Face</button>
                    <button className="hover:bg-[#FA9090] hover:text-white px-6 py-2 rounded-full transition duration-300">For Body</button>
                    <button className="hover:bg-[#FA9090] hover:text-white px-6 py-2 rounded-full transition duration-300">For Hair</button>
                    <button className="hover:bg-[#FA9090] hover:text-white px-6 py-2 rounded-full transition duration-300">Accessories</button>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-7xl px-4 mb-20">
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare1}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare2}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare3}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare4}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare5}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare2}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare1}
                            alt="product image"
                            className="rounded-md object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
                <div className="group p-4 rounded-lg transition duration-300 hover:shadow-lg">
                    <div className="relative">
                        <Image
                            src={skincare3}
                            alt="product image"
                            className="rounded-lg object-cover h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                            <CiHeart className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <VscGitCompare className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <FaRegEye className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                            <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        {/* Star Ratings */}
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>

                        <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                            Florence by Mills Mind Glowing Peel
                        </p>

                        <div className="flex justify-center gap-4 mt-2">
                            <p className="font-bold text-md text-[#FA9090]">£112.00</p>
                            <p className="line-through text-gray-500 text-md">£160.93</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
