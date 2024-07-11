import { faAt } from "@fortawesome/free-solid-svg-icons";
import ViewLayout from "../layout/view-layout.component";
import { Views } from "../context/navigation.context";

export default function ContactView() {
  return (
    <ViewLayout view={Views.CONTACT} icon={faAt}>
      <h1>lol</h1>
    </ViewLayout>
  );
}
