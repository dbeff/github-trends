import RepoCard from "./RepoCard";
import { useAppSelector } from "../store";
import { useGetTrendingReposQuery } from "../store/github/githubApi";

export default function RepoList() {
  const timeRange = useAppSelector((s) => s.filters.timeRange);
  const language = useAppSelector((s) => s.filters.language);
  const { data, isLoading, isError, refetch, isFetching } =
    useGetTrendingReposQuery({ timeRange, language });

  if (isLoading) {
    return (
      <p className="text-sm text-gray-500">Loading trending repositories…</p>
    );
  }

  if (isError) {
    return (
      <div className="text-sm text-red-600">
        Failed to load repositories.{" "}
        <button onClick={() => refetch()} className="underline">
          Retry
        </button>
      </div>
    );
  }

  const repos = data?.repos ?? [];

  return (
    <div className="flex flex-col gap-4">
      {isFetching && <p className="text-xs text-gray-400">Updating…</p>}
      {repos.length === 0 && (
        <p className="text-sm text-gray-500">No repositories found.</p>
      )}
      {repos.map((repo, i) => (
        <RepoCard key={repo.id} repo={repo} index={i} />
      ))}
    </div>
  );
}
