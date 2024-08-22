import { QueryFunctionContext } from "@tanstack/react-query";
import { openAPIClient } from "../openapi-client";
import { paths } from "../__generated__/schema";
import { octokitClient } from "../octokit-client";

export const CATEGORIES = async () => {
  const { data, error } = await openAPIClient.GET("/api/categories/");
  if (error) throw error;
  return data;
};

export const PROJECTS = async (
  context: QueryFunctionContext<
    [string, paths["/api/projects/"]["get"]["parameters"]["query"]]
  >
) => {
  const { data, error } = await openAPIClient.GET("/api/projects/", {
    params: {
      query: context.queryKey[1],
    },
  });
  if (error) throw error;
  return data;
};

export const README = async (
  context: QueryFunctionContext<[string, string]>
) => {
  const response = await octokitClient.request(
    "GET /repos/{owner}/{repo}/readme",
    {
      owner: import.meta.env.VITE_GITHUB_USER,
      repo: context.queryKey[1],
      headers: {
        accept: "application/vnd.github.html+json",
      },
    }
  );
  return response.data as unknown as string;
};
