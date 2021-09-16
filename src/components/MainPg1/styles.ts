import styled from "styled-components"
import fundoPg1 from "assets/IMG/FundoPagina1.svg"
import { colors } from "styles/GlobalStyle"

export const MainPg1 = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("${fundoPg1}");
    height: 50.4rem;

    div {

        width: 60%;

        h1 {
            display: flex;
            text-align: center;
            flex-direction: column;
            font-size: 4.2rem;
            margin-top: 10rem;
            font-family: 'Aclonica';
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: ${colors.borderColor};
            color: ${colors.white};
            align-items: center;
            justify-content: center;
        }

    }

    h1 {
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 7rem;
        margin-top: 6rem;
        font-family: 'Aclonica';
        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: ${colors.borderColor};
        color: ${colors.white};
        align-items: center;
        justify-content: center;
    }

`