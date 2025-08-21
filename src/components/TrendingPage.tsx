import Header from "./Header";
import RepoList from "./RepoList";
import { setLanguage, setTimeRange } from "../store/filters/filtersSlice";

import { useAppDispatch, useAppSelector } from "../store";
import { FilterSelect } from "./FilterSelect";
import { TimeRangeTabs } from "./TimeRangeTabs";
import { GitHub } from "../modules/Github";

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
              options={Object.keys(GitHub.LANGUAGE_COLORS)}
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
