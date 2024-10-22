import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Facebook', sales: 4000 },
  { name: 'Instagram', sales: 3000 },
  { name: 'Twitter', sales: 2000 },
  { name: 'LinkedIn', sales: 1500 },
  { name: 'TikTok', sales: 2500 },
];

const SalesFromSocials = () => {
  return (
    <div className="h-96"> {/* Add a fixed height */}
      <ResponsiveContainer width="100%" height="100%"> {/* Change height to 100% */}
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#1e293b' }}
            cursor={{ fill: '#e2e8f0' }}
          />
          <Bar dataKey="sales" fill="green" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesFromSocials;
