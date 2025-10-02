declare module '*.svx' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType;
  export default component;
  export const metadata: {
    title?: string;
    description?: string;
    date?: string;
    categories?: string[];
    author?: string;
    ogImage?: string;
    url?: string;
    siteName?: string;
    [key: string]: unknown;
  };
}



