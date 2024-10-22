import profile from "../../../assets/profile-1.jpg";
import Image from "next/image";


const Page = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      itemsBought: 10,
      customerSince: "2021-06-15",
      profileImage: profile,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      itemsBought: 5,
      customerSince: "2022-01-20",
      profileImage: profile,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      itemsBought: 15,
      customerSince: "2020-11-05",
      profileImage: profile,
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      itemsBought: 8,
      customerSince: "2023-03-12",
      profileImage: profile,
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Customers</h1>
      <section className="bg-white rounded-lg shadow-md overflow-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left border-b whitespace-nowrap">Profile Picture</th>
                <th className="py-3 px-4 text-left border-b whitespace-nowrap">Customer Name</th>
                <th className="py-3 px-4 text-left border-b whitespace-nowrap">Email</th>
                <th className="py-3 px-4 text-left border-b whitespace-nowrap">Items Bought</th>
                <th className="py-3 px-4 text-left border-b whitespace-nowrap">Customer Since</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="py-4 px-4 border-b">
                    <Image
                      src={customer.profileImage}
                      alt={`${customer.name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">{customer.name}</td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">{customer.email}</td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">{customer.itemsBought}</td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">{customer.customerSince}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Page;
