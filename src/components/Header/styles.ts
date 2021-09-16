import styled from "styled-components"
import fundoCima from "assets/IMG/FundoDeCima.svg"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`

    width: 100%;
    display: flex;
    background-image: url("${fundoCima}");
    max-height: 15rem;

    picture {
        img {
            margin-top: 5rem;
            margin-left: 4rem;
            width: 21rem;
        }
    }

    div {
        padding: 1rem;
        font-size: 3rem;
        font-family: 'Archivo';
        color: ${colors.fontColor};
        margin-top: 10rem;
    }

    div {
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
        }
    }

    div {
        ul {
            li {
                padding: 2rem;
                margin-top: -2rem;
            }
        }
    }

    div {
        ul {
            a {
                display: flex;
                flex-direction: row;
                text-decoration: none;
                font-family: 'Archivo';
                color: ${colors.fontColor};
                font-size: 3rem;
            }
        }
    }

`