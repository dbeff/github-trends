import RepoCard, { type RepoInfo } from './RepoCard'

const mock: RepoInfo[] = [
  {
    id: '1',
    owner: 'facebook',
    name: 'react',
    description: 'The library for web and native user interfaces.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    totalStars: 235000,
    starsToday: 512,
    forks: 52000,
  },
  {
    id: '2',
    owner: 'vercel',
    name: 'next.js',
    description: 'The React Framework for Production.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    totalStars: 125000,
    starsToday: 241,
    forks: 28000,
  },
  {
    id: '3',
    owner: 'microsoft',
    name: 'TypeScript',
    description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    totalStars: 97000,
    starsToday: 180,
    forks: 14000,
  },
]

export default function RepoList() {
  return (
    <div className="flex flex-col gap-4">
      {mock.map((repo, i) => (
        <RepoCard key={repo.id} repo={repo} index={i} />
      ))}
    </div>
  )
}
