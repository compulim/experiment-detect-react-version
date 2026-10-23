declare module 'react-dom' {
  function render(node: unknown, element: HTMLElement): void;

  const version: string;
}

declare module 'react-dom/client' {
  function createRoot(element: HTMLElement): {
    render(node: unknown): void;
  };
}

export {};
