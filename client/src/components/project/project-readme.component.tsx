import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import { components } from "../../__generated__/schema";
import { useQuery } from "@tanstack/react-query";
import { README } from "../../react-query/queries";
import PageLoading from "../page-loading/page-loading.component";
import DOMPurify from "dompurify";
import { ThemeContext } from "../../context/theme.context";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: components["schemas"]["ProjectSerilizer"];
}

export default function ProjectReadme({ className, project, ...props }: Props) {
  const { theme } = useContext(ThemeContext);

  const { data, isLoading } = useQuery({
    queryFn: README,
    queryKey: [README.name, project.name],
  });

  return (
    <PageLoading loading={isLoading}>
      <div className="flex p-[2rem] w-full max-w-[980px]">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data!),
          }}
          data-theme={theme}
          className={cn("markdown-body", className)}
          {...props}
        ></div>
      </div>
    </PageLoading>
  );
}
