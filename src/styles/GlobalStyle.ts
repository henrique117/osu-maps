import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @font-face {
    font-family: 'Aclonica';
    src: url('assets/fonts/Aclonica-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'ABeeZee';
    src: url('assets/fonts/ABeeZee-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'Archivo';
    src: url('assets/fonts/archivo-narrow-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }

    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 100%;
}
`

export const colors = {
    fontColor: "#3B232F",
    borderColor: "#003396",
    bgColor: "#FFC2E1D9",
    white: "ffffff",
    black: "000000"
}