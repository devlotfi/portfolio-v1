import { QueryFunctionContext } from "@tanstack/react-query";
import { openAPIClient } from "../openapi-client";
import { paths } from "../__generated__/schema";

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
