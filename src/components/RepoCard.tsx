import { GitFork, Star } from "lucide-react";

export type RepoInfo = {
  id: string;
  owner: string;
  name: string;
  description?: string;
  language?: string;
  languageColor?: string;
  starsToday: number;
  totalStars: number;
  forks: number;
  starsDelta?: number;
};

type Props = {
  repo: RepoInfo;
  index: number;
};

const RepoCard = ({ repo, index }: Props) => {
  return (
    <article className="group relative flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 hover:shadow">
      <header className="flex items-start gap-2">
        <span className="mt-1 w-6 shrink-0 text-right font-mono text-xs tabular-nums text-gray-400">
          {index + 1}
        </span>
        <div className="flex min-w-0 flex-col">
          <a
            href={`/${repo.owner}`}
            className="inline-flex max-w-full items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            <span className="truncate">{repo.owner}</span>
            <span className="text-gray-400">/</span>
            <span className="truncate font-semibold text-gray-900 group-hover:text-blue-600">
              {repo.name}
            </span>
          </a>
          {repo.description && (
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-600">
              {repo.description}
            </p>
          )}
        </div>
      </header>
      <footer className="flex flex-wrap items-center gap-x-4 gap-y-2 pl-8 text-[11px] text-gray-500">
        {repo.language && (
          <span className="inline-flex items-center gap-1">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: repo.languageColor || "#999" }}
            />
            <span>{repo.language}</span>
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star className="size-3" />
          {Intl.NumberFormat("en", { notation: "compact" }).format(
            repo.totalStars
          )}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="size-3" />
          {Intl.NumberFormat("en", { notation: "compact" }).format(repo.forks)}
        </span>
        <span className="inline-flex items-center gap-1 text-green-600">
          <Star className="size-3" />
          {repo.starsToday} today
        </span>
      </footer>
    </article>
  );
};

export default RepoCard;
