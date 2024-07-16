import { useEffect, useState } from "react";
import ViewContent from "../layout/view-content.component";

export default function ProjectsView() {
  const [md, setMd] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.github.com/repos/devlotfi/local-todolist/readme",
        {
          headers: {
            accept: "application/vnd.github.html+json",
          },
        }
      );
      const data = await res.text();
      setMd(data);
    })();
  }, []);

  return (
    <ViewContent>
      <h1>lol</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md!,
        }}
        className="markdown-body"
      ></div>
    </ViewContent>
  );
}
