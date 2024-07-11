import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "../layout/view-layout.component";
import { Views } from "../context/navigation.context";

export default function StudiesView() {
  return (
    <ViewLayout view={Views.STUDIES} icon={faGraduationCap}>
      <h1>lol</h1>
    </ViewLayout>
  );
}
