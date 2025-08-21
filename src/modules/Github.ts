export namespace GitHub {

  export type RepoItem = {
    id: string;
    owner: string;
    name: string;
    description?: string;
    language?: string;
    languageColor?: string;
    totalStars: number;
    forks: number;
    url: string;
  };

  export type SearchResponse = {
    total_count: number
    items: {
      id: number
      name: string
      full_name: string
      owner: {
        login: string
      }
      stargazers_count: number
      forks_count: number
      language: string | null
      languageColor: string | null
      description: string | null
      html_url: string
    }[]
  }

  // GitHub language colors (subset of most common languages). Source: GitHub Linguist (simplified list)
  export const LANGUAGE_COLORS: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'C': '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB',
    'Scala': '#c22d40',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'SCSS': '#c6538c',
    'Vue': '#41b883',
    'Svelte': '#ff3e00',
    'Elixir': '#6e4a7e',
    'Haskell': '#5e5086',
    'Perl': '#0298c3',
    'Lua': '#000080',
    'R': '#198CE7',
    'Julia': '#a270ba',
    'Objective-C': '#438eff',
    'Solidity': '#AA6746',
    'Dockerfile': '#384d54',
    'Makefile': '#427819',
    'Markdown': '#083fa1',
    'JSON': '#292929',
    'YAML': '#cb171e',
    'GraphQL': '#e10098'
  }

  export function colorForLanguage(lang: string | undefined | null): string | undefined {
    if (!lang) return undefined
    return GitHub.LANGUAGE_COLORS[lang] || "#808080"
  }
}
