import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { components } from "../../__generated__/schema";
import { useQuery } from "@tanstack/react-query";
import { README } from "../../react-query/queries";
import PageLoading from "../page-loading/page-loading.component";
import DOMPurify from "dompurify";

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: components["schemas"]["ProjectSerilizer"];
}

export default function ProjectReadme({ className, project, ...props }: Props) {
  const { data, isLoading } = useQuery({
    queryFn: README,
    queryKey: [README.name, project.name],
  });

  return (
    <PageLoading loading={isLoading}>
      <div className="flex p-[1rem]">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data!),
          }}
          className={cn("markdown-body", className)}
          {...props}
        ></div>
      </div>
    </PageLoading>
  );
}
