import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TimeRange } from '../filters/filtersSlice'
import { GitHub } from '../../modules/Github'

export interface TrendingQueryArgs {
  timeRange: TimeRange
  language: string
  perPage?: number
  page?: number
}

function computeCreatedQualifier(range: TimeRange): string {
  const now = new Date()
  const d = new Date(now)
  if (range === 'daily') d.setDate(d.getDate() - 1)
  else if (range === 'weekly') d.setDate(d.getDate() - 7)
  else d.setDate(d.getDate() - 30)
  const iso = d.toISOString().slice(0, 10)
  return `created:>=${iso}`
}

function buildQuery({ timeRange, language }: { timeRange: TimeRange; language: string }) {
  const parts: string[] = [computeCreatedQualifier(timeRange)]
  if (language && language !== 'Any') {
    parts.push(`language:${language}`)
  }
  return parts.join(' ')
}

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/vnd.github+json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTrendingRepos: builder.query<{ repos: GitHub.RepoItem[]; total: number }, TrendingQueryArgs>({
      query: ({ timeRange, language, perPage = 25, page = 1 }) => {
        const q = buildQuery({ timeRange, language })
        const params = new URLSearchParams({
          q,
          sort: 'stars',
          order: 'desc',
          per_page: String(perPage),
          page: String(page),
        })
        return `/search/repositories?${params.toString()}`
      },
      transformResponse: (response: GitHub.SearchResponse): { repos: GitHub.RepoItem[]; total: number } => {
        const repos: GitHub.RepoItem[] = response.items.map((item) => ({
          id: String(item.id),
          owner: item.owner.login,
          name: item.name,
          description: item.description || undefined,
          language: item.language || undefined,
          languageColor: GitHub.colorForLanguage(item.language),
          totalStars: item.stargazers_count,
          forks: item.forks_count,
          url: item.html_url,
        }))
        return { repos, total: response.total_count }
      },
    }),
  }),
})

export const { useGetTrendingReposQuery } = githubApi
