/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NSTACK_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
