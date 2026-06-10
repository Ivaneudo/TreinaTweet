import { Global, ThemeProvider } from '@emotion/react';
import Index from './Layout/View/pages/Index.js';
import { theme } from './Layout/components/cssGlobal/theme.js';
import { GlobalStyles } from './Layout/components/cssGlobal/globalStyles.js';
import styled from '@emotion/styled';

export const AppContainer = styled.div`
  padding: 8px 16px;
  max-width: 640px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Global styles={GlobalStyles}/>  
          <AppContainer>
            <Index />
          </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
