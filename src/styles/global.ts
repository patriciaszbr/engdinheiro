import {createGlobalStyle}  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #FF0000;
    --black: #151414;

    --blue-light: #00BFFF;
    --green: #00FF00;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF


  }

  * {
    margin: 0;
    padding: 0;
    outline: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 728) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 480;
  }

  h1, h2 , h3, h4 , h5 , h6 , strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 480;
  }

  button {
    cursor: pointer;

  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;