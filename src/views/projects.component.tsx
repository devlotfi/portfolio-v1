import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "../layout/view-layout.component";
import { Views } from "../context/navigation.context";

export default function ProjectsView() {
  return (
    <ViewLayout view={Views.PROJECTS} icon={faListCheck}>
      <h1>lol</h1>
    </ViewLayout>
  );
}
