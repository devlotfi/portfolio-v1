import { paths } from "../__generated__/schema";
import { openAPIClient } from "../openapi-client";

export const CONTACT = async (
  body: paths["/api/contact/"]["post"]["requestBody"]["content"]["application/json"]
) => {
  const { data, error } = await openAPIClient.POST("/api/contact/", {
    body,
  });
  if (error) throw error;
  return data;
};
