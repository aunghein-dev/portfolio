// components/tables/CommonPitfallsTable.jsx
export default function CommonPitfallsTable({ data }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[var(--color-blockquote)] text-left">
            <th className="w-1/3 p-3 font-semibold">Challenge</th>
            <th className="w-2/3 p-3 font-semibold">Solution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-[var(--color-divider)] hover:bg-[var(--color-blockquote)]"
            >
              <td className="p-3">{item.challenge}</td>
              <td className="p-3">{item.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
