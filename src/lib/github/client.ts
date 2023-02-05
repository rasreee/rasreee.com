import type { NormalizedCacheObject } from "@apollo/client/cache";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache";
import { ApolloClient } from "@apollo/client/core/ApolloClient";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client/link/http/createHttpLink";
import asserted from "lib/asserted";

type GithubClient = ApolloClient<NormalizedCacheObject>;

let _client: GithubClient;

function createGithubClient() {
  const accessToken = asserted(
    process.env.GITHUB_ACCESS_TOKEN,
    "Missing environment variable: GITHUB_ACCESS_TOKEN"
  );

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${accessToken}`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function githubClient(): GithubClient {
  const client = _client || createGithubClient();

  return client;
}
