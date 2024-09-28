/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
