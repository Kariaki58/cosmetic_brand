import unitedState from '@/app/assets/unitednation.png';
import nigeria from '@/app/assets/nigeria.png';
import Image from 'next/image';


const SessionByCountry = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Visitors</h2>
        <button className="p-2 bg-black text-white rounded-xl">show all</button>
      </div>
      <div className="flex justify-between py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md">
        <div className="flex gap-4">
          <div>
            <Image src={nigeria} width={24} height={24} alt="country flag" />
          </div>
          <div>Nigeria</div>
        </div>
        <p>1</p>
      </div>
      <div className="flex justify-between py-2 px-4 bg-gray-200 hover:bg-gray-400 cursor-default text-black rounded-md mt-3">
        <div className="flex gap-4">
          <div>
            <Image src={unitedState} width={24} height={24} alt="country flag" />
          </div>
          <div>United State of America</div>
        </div>
        <p>4</p>
      </div>
    </div>
  )
}

export default SessionByCountry;