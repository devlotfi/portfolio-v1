import ViewContent from "../layout/view-content.component";
import { useQuery } from "@tanstack/react-query";
import { CATEGORIES } from "../react-query/queries";

export default function ProjectsView() {
  const { data } = useQuery({
    queryFn: CATEGORIES,
    queryKey: [CATEGORIES.name],
  });

  return (
    <ViewContent>
      <h1>{import.meta.env.VITE_API_URL}</h1>
      <h1>{JSON.stringify(data)}</h1>
    </ViewContent>
  );
}
