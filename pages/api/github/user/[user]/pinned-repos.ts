import { gql } from "@apollo/client";
import { getGithubClient } from "lib/github/github-client";
import type { GithubRepo } from "lib/github/types";
import type { ApiRequest, ApiResponse } from "lib/next-api";
import invariant from "lib/utils/invariant";
import { serializeError } from "lib/utils/serialize-error";

const getPinnedRepos = async (user: string): Promise<GithubRepo[]> => {
  const client = getGithubClient();

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

  const repos = data.user.pinnedItems.edges.map(
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

  return repos;
};

export type GetPinnedReposResult = {
  repos: GithubRepo[];
};

export type GetPinnedReposParams = { user: string };

export default async function handler(
  req: ApiRequest<GetPinnedReposParams>,
  res: ApiResponse<GetPinnedReposResult>
) {
  try {
    const user = req.query.user;
    invariant(typeof user === "string", `Invalid 'user' param: ${user}`);

    const repos = await getPinnedRepos(user);

    res.status(200).json({ repos });
  } catch (err) {
    res.status(400).json(serializeError(err));
  }
}
