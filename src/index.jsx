import React from 'react';
import App from './App.jsx';

(async () => {
  let createRoot;
  let reactDOMModule;

  try {
    reactDOMModule = (await import('react-dom')).default;
  } catch (error) {
    console.log('Failed to import "react-dom"', error);
  }

  const actualVersion = reactDOMModule ? reactDOMModule.version : undefined;
  const render = reactDOMModule ? reactDOMModule.render : undefined;

  try {
    createRoot = (await import('react-dom/client')).createRoot;
  } catch (error) {
    console.log('Failed to import "react-dom/client"', error);
  }

  console.log(
    JSON.stringify(
      {
        FLAVOR: FLAVOR,
        VERSION: createRoot ? '19' : render ? '16-18' : 'UNKNOWN',
        ACTUAL_VERSION: actualVersion || 'UNKNOWN',
        renderVia: [createRoot ? 'createRoot' : undefined, render ? 'render' : undefined].filter(Boolean).join(', '),
        hasCreateRoot: !!createRoot,
        hasRender: !!render
      },
      null,
      2
    )
  );

  console.log({ reactDOMModule });

  const element = document.createElement('main');

  document.body.append(element);

  if (createRoot) {
    createRoot(element).render(<App />);
  } else if (render) {
    render(<App />, element);
  }
})();
