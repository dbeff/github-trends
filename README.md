# GitHub Trends

Discover recently created repositories gaining traction on GitHub. Filter by language and time range (today / this week / this month) and explore trending projects at a glance.

**Live Demo:** [github-trends-delta.vercel.app](https://github-trends-delta.vercel.app/)

## 🚀 Stack

- React 19 + TypeScript
- Vite 7 (fast dev & build)
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Redux Toolkit & RTK Query (state + data fetching)
- React Router v7 (basic routing foundation)
- Lucide React (icons)

## ✨ Features

- Trending repositories pulled from the GitHub Search API
- Time range filter: daily / weekly / monthly (based on repository creation date)
- Language filter (TypeScript, JavaScript, Python, Go, Rust, etc.)
- Lightweight, responsive UI with Tailwind CSS utilities
- Automatic color badges for languages (subset mapping)
- Auto refetch indicator (shows Updating… while fetching)
- Graceful loading / empty / error states with retry

## 📸 UI Overview

The main page shows:

1. Header / branding
2. Filter controls (language + time range tabs)
3. List of repository cards with stars, forks, watchers, and description

## 🧱 Project Structure (excerpt)

```text
src/
  components/        UI components (TrendingPage, RepoList, RepoCard...)
  modules/           Domain modules (GitHub types + helpers)
  store/             Redux slices & RTK Query API definitions
  index.css          Tailwind import
  main.tsx           App bootstrap
```

## 🔌 GitHub API Usage

Uses the public Search API endpoint `/search/repositories` with query parameters:

- `created:>=YYYY-MM-DD` derived from selected time range
- `language:<Lang>` when a specific language is chosen
- Sorted by stars (descending)

Currently requests are **unauthenticated**. For higher rate limits you could supply a token and set an `Authorization` header (future enhancement). Be mindful of GitHub Search API rate limits during rapid development refreshes.

## 🛠️ Getting Started

Prerequisites:

- Node.js 18+ (recommended 20 LTS)
- Yarn (or use npm/pnpm equivalents)

Clone & install:

```bash
git clone <repo-url>
cd github-trends
yarn install
```

Run dev server:

```bash
yarn dev
```

Then open the printed local URL (typically <http://localhost:5173>).

Type checking only:

```bash
yarn types
```

Production build:

```bash
yarn build
```

Preview production build locally:

```bash
yarn preview
```

Lint:

```bash
yarn lint
```

If you prefer npm:

```bash
npm install
npm run dev
```

## 📦 Key Dependencies

Runtime:

- `react`, `react-dom`
- `@reduxjs/toolkit`, `react-redux`
- `@tailwindcss/vite`, `tailwindcss`
- `react-router`
- `lucide-react`

Dev / Tooling:

- `vite`, `@vitejs/plugin-react`
- `typescript`
- `eslint`, `@eslint/js`, `typescript-eslint`
- `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

## 🧪 Scripts

| Script  | Purpose                              |
| ------- | ------------------------------------ |
| dev     | Start Vite dev server                |
| build   | Type-check then build for production |
| preview | Preview the production build         |
| lint    | Run ESLint on the codebase           |
| ts      | Run isolated TypeScript diagnostics  |

## 🔍 Potential Enhancements

- Add personal access token support for higher API limits
- Pagination / infinite scroll
- Star growth metrics (compare previous intervals)
- Dark mode toggle
- Persist filters in URL params
