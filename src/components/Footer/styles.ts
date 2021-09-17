import styled from "styled-components"
import fundoBaixo from "assets/IMG/FundoDeBaixo.svg"
import { colors } from "styles/GlobalStyle"

export const Footer1 = styled.footer`

    background-image: url(${fundoBaixo});
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 5rem;

    h1 {
        padding: 1.5rem;
        background-color: ${colors.white};
    }

`