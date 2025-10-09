import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Only prevent horizontal scroll without affecting other styling */
  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1F2937;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #00d4aa 0%, #96e6a1 100%);
    border-radius: 9999px;
    
    &:hover {
      background: linear-gradient(135deg, #96e6a1 0%, #d4fc79 100%);
    }
  }
  
  /* Remove styles that might interfere with existing layouts */
`;

export default GlobalStyles;
