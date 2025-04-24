import React, { useState, useEffect } from 'react';
import { fetchOwnership } from '@/api/fetchOwnership';// <-- if you're calling a helper

function CompanyTable({ ticker }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const result = await fetchOwnership(ticker);
      setData(result);
      setLoading(false);
    }

    if (ticker) {
      load();
    }
  }, [ticker]);

  return (
    <div className="overflow-x-auto mt-4">
      <h2 className="text-lg font-semibold mb-2">Ownership for {ticker}</h2>
      <p className="text-xs text-gray-400 italic mb-2">
        Demo data shown — Real-time data access requires an API key
      </p>
      {loading ? (
        <p className="text-gray-500 italic">Loading ownership data...</p>
      ) : data.length === 0 ? (
        <p className="text-red-500">No data found for "{ticker}".</p>
      ) : (
        <table className="min-w-full bg-white border border-linen rounded-lg shadow-md text-sm">
          <thead className="bg-blush text-gray-900 font-semibold">
            <tr>
              <th className="py-3 px-4 text-left">Owner</th>
              <th className="py-3 px-4 text-center">Shares</th>
              <th className="py-3 px-4 text-center">% Owned</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="hover:bg-rosewater transition-colors">
                <td className="py-3 px-4">{entry.owner}</td>
                <td className="py-3 px-4 text-center">{entry.shares.toLocaleString()}</td>
                <td className="py-3 px-4 text-center">{entry.percent.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CompanyTable;
