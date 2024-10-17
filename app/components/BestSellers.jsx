import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import skincare1 from '../assets/skincare1.jpg';

const BestSellers = () => {
  return (
    <section className="container mx-auto px-3 mb-10 flex gap-10">
        <div>
            <h1 className="font-bold text-xl mb-10">Best Seller</h1>
            <div className="flex gap-5 items-center">
                <Image
                src={skincare1}
                alt="product image"
                className="rounded-md object-cover w-24 h-24"
                />
                <div className="">
                    <p>Illuminating Serum Primer - By Mills</p>
                    <div className="flex">
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>
                    </div>
                    <p className="font-bold mt-4">
                        <span className="font-bold">£90.00</span>
                        <span className="line-through text-gray-500 ml-3">£113.19</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-5 items-center mt-5">
                <Image
                src={skincare1}
                alt="product image"
                className="rounded-md object-cover w-24 h-24"
                />
                <div className="">
                    <p>Illuminating Serum Primer - By Mills</p>
                    <div className="flex">
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>
                    </div>
                    <p className="font-bold mt-4">
                        <span className="font-bold">£90.00</span>
                        <span className="line-through text-gray-500 ml-3">£113.19</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-5 items-center mt-5">
                <Image
                src={skincare1}
                alt="product image"
                className="rounded-md object-cover w-24 h-24"
                />
                <div className="">
                    <p>Illuminating Serum Primer - By Mills</p>
                    <div className="flex">
                        <div className="flex justify-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <IoStarSharp key={i} className="text-lg" />
                            ))}
                        </div>
                    </div>
                    <p className="font-bold mt-4">
                        <span className="font-bold">£90.00</span>
                        <span className="line-through text-gray-500 ml-3">£113.19</span>
                    </p>
                </div>
            </div>
        </div>
      <div>
        <h1 className="font-bold text-xl mb-10">Top Rated</h1>
        <div className="flex gap-5 items-center">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-10">On Sale</h1>
        <div className="flex gap-5 items-center">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
            <Image
            src={skincare1}
            alt="product image"
            className="rounded-md object-cover w-24 h-24"
            />
            <div className="">
                <p>Illuminating Serum Primer - By Mills</p>
                <div className="flex">
                    <div className="flex justify-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} className="text-lg" />
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-4">
                    <span className="font-bold">£90.00</span>
                    <span className="line-through text-gray-500 ml-3">£113.19</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
