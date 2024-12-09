import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './router/router';
import GlobalStyles from './component/GlobalStyles/GlobalStyles';
import { HappyProvider } from '@ant-design/happy-work-theme';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HappyProvider>
      <GlobalStyles>
        <RouterProvider router={route} />
      </GlobalStyles>
    </HappyProvider>
  </StrictMode>,
);
