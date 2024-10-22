import Left from "@/app/components/dashboard/left"


export const metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard for the Cosmetic Brand',
};

const page = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-72">
        <Left />
      </div>
      <div className="flex-1 p-4 bg-gray-100 overflow-y-hidden">
        {children}
      </div>
    </div>
  )
}

export default page
