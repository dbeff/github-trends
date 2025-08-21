import Header from "./Header";
import RepoList from "./RepoList";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLanguage, setTimeRange } from "../features/filters/filtersSlice";
import type { TimeRange } from "../features/filters/filtersSlice";

const timeRanges = [
  { id: "daily", label: "Today" },
  { id: "weekly", label: "This week" },
  { id: "monthly", label: "This month" },
];

export default function TrendingPage() {
  const dispatch = useAppDispatch();
  const timeRange = useAppSelector((s) => s.filters.timeRange);
  const language = useAppSelector((s) => s.filters.language);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Trending repositories
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              See what the GitHub community is most excited about right now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <FilterSelect
              label="Language"
              value={language}
              onChange={(v) => dispatch(setLanguage(v))}
              options={[
                "Any",
                "TypeScript",
                "JavaScript",
                "Python",
                "Go",
                "Rust",
              ]}
            />
            <TimeRangeTabs
              value={timeRange}
              onChange={(v) => dispatch(setTimeRange(v))}
            />
          </div>
        </div>
        <RepoList />
      </main>
    </div>
  );
}

function FilterSelect({
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
    <label className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 text-xs font-medium text-gray-700 shadow-sm hover:border-gray-400">
      <span>{label}</span>
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

function TimeRangeTabs({
  value,
  onChange,
}: {
  value: TimeRange;
  onChange: (v: TimeRange) => void;
}) {
  return (
    <div className="flex overflow-hidden rounded-md border border-gray-300 bg-white text-xs shadow-sm">
      {timeRanges.map((r) => {
        const active = r.id === value;
        return (
          <button
            key={r.id}
            onClick={() => onChange(r.id as TimeRange)}
            className={
              "px-3 py-2 font-medium transition focus:outline-none " +
              (active
                ? "bg-blue-600 text-white"
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
