import { FaFacebook, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const SessionSocials = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="mb-5 font-bold text-xl">Socials</h1>
                <button className="p-2 bg-black text-white rounded-xl">show all</button>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md">
                <BsTwitterX size={24}/>
                <p>19</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md mt-1">
                <FaInstagram size={24} className="text-pink-500" />
                <p>41</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md mt-1">
                <FaFacebook size={24} className="text-blue-600"/>
                <p>11</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md mt-1">
                <FaPinterestP size={24} className="text-red-600" />
                <p>101</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md mt-1">
                <FaYoutube size={24} className="text-red-500" />
                <p>18</p>
            </div>
        </div>
    )
}

export default SessionSocials;