export interface Project {
  id: number;
  repositoryName: string;
  displayName: string;
  description: string;
  iconURL: string;
  thumbnailURL: string;
  repositoryURL: string;
  deploymentURL: string | null;
}
