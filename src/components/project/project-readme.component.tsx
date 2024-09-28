import { BaseHTMLAttributes, useContext } from 'react';
import { cn } from '../../utils/cn';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import PageLoading from '../page-loading/page-loading.component';
import DOMPurify from 'dompurify';
import { ThemeContext } from '../../context/theme.context';
import { octokitClient } from '../../octokit-client';
import { Project } from '../../types/project';

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  project: Project;
}

export default function ProjectReadme({ className, project, ...props }: Props) {
  const { appliedTheme } = useContext(ThemeContext);

  const { data, isLoading } = useQuery({
    queryFn: async (context: QueryFunctionContext<[string, string]>) => {
      const response = await octokitClient.request(
        'GET /repos/{owner}/{repo}/readme',
        {
          owner: import.meta.env.VITE_GITHUB_USER,
          repo: context.queryKey[1],
          headers: {
            accept: 'application/vnd.github.html+json',
          },
        },
      );
      return response;
    },
    queryKey: ['README', project.repositoryName],
  });

  return (
    <PageLoading loading={isLoading}>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.data as unknown as string),
        }}
        data-theme={appliedTheme}
        className={cn('markdown-body p-[1.5rem] max-w-[980px]', className)}
        {...props}
      ></div>
    </PageLoading>
  );
}
