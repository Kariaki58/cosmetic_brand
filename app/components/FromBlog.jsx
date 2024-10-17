import Image from 'next/image';
import skincare1 from '../assets/skincare1.jpg';
import skincare2 from '../assets/skincare2.jpg';
import skincare3 from '../assets/skincare3.jpg';


const FromBlog = () => {
  return (
    <div className="container mx-auto px-3 border-t border-gray-200">
        <div className='text-center mt-10 w-[500px] mx-auto'>
            <h1 className='font-bold text-3xl'>From The Blog</h1>
            <p className='text-gray-500 mt-10'>
                Get all latest skincare essentials news, tips and tricks to nurture your skin glowy, dewy best before you even think makeup
            </p>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div>
                <Image src={skincare1} alt="Skincare 1" alt="skincare 1" className='w-96 h-80 rounded-xl' />
                <h2 className='mt-5 text-md font-bold'>Skincare Tips: How to Boost Your Skin's Glow</h2>
                <p className='text-gray-500 text-sm mt-4'>
                    APRIL 2, 2021
                </p>
            </div>
            <div>
                <Image src={skincare2} alt="Skincare 1" alt="skincare 1" className='w-96 h-80 rounded-xl' />
                <h2 className='mt-5 text-md font-bold'>Skincare Tips: How to Boost Your Skin's Glow</h2>
                <p className='text-gray-500 text-sm mt-4'>
                    APRIL 2, 2021
                </p>
            </div>
            <div>
                <Image src={skincare3} alt="Skincare 1" alt="skincare 1" className='w-96 h-80 rounded-xl' />
                <h2 className='mt-5 text-md font-bold'>Skincare Tips: How to Boost Your Skin's Glow</h2>
                <p className='text-gray-500 text-sm mt-4'>
                    APRIL 2, 2021
                </p>
            </div>
        </div>
    </div>
  )
}

export default FromBlog