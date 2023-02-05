import { gql } from "@apollo/client";
import { githubClient } from "lib/github/client";
import type { GithubRepo } from "lib/github/types";

export async function getPinnedRepos(user: string): Promise<GithubRepo[]> {
  const client = githubClient();

  const { data } = await client.query({
    query: gql`
      {
        user(login: "${user}") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  name
                  url
                  homepageUrl
                  description
                  pushedAt
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const pinnedRepos = data.user.pinnedItems.edges.map(
    ({ node: repo }: any) =>
      ({
        name: repo.name,
        url: repo.url,
        description: repo.description,
        updatedAt: repo.pushedAt,
        stars: repo.stargazerCount,
        forks: repo.forkCount,
        language: repo.primaryLanguage,
        homepageUrl: repo.homepageUrl,
      } as GithubRepo)
  );

  return pinnedRepos;
}
