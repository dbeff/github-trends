export function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-gray-700 hover:border-gray-400">
      <span className="font-bold">{label}</span>
      <select
        className="bg-transparent py-2 text-xs font-normal focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-white">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
