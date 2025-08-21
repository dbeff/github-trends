import type { TimeRange } from "../store/filters/filtersSlice";

const timeRanges = [
  { id: "daily", label: "Today" },
  { id: "weekly", label: "This week" },
  { id: "monthly", label: "This month" },
];

export function TimeRangeTabs({
  value,
  onChange,
}: {
  value: TimeRange;
  onChange: (v: TimeRange) => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-md border border-gray-300 bg-white text-xs">
      {timeRanges.map((r) => {
        const active = r.id === value;
        return (
          <button
            key={r.id}
            onClick={() => onChange(r.id as TimeRange)}
            className={
              "px-3 py-2 font-medium transition focus:outline-none " +
              (active
                ? "bg-indigo-600 text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900")
            }
          >
            {r.label}
          </button>
        );
      })}
    </div>
  );
}
