import { openAPIClient } from "../openapi-client";

export const CATEGORIES = async () => {
  const { data, error } = await openAPIClient.GET("/api/categories/");
  if (error) throw error;
  return data;
};
