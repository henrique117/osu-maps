import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const MainPg2 = styled.main`

    background-color: ${colors.bgColor};
    display: flex;
    flex-direction: column;

    section {

        h1 {
            font-size: 5.5rem;
            color: white;
            -webkit-text-stroke-width: 0.1px;
            -webkit-text-stroke-color: ${colors.borderColor};
            font-family: 'Aclonica';
            text-align: center;
        }

        picture {
            margin-left: 2rem;
            display: flex;
            flex-direction: row;

            img {
                margin-top: 5rem;
                margin-bottom: 2rem;
                width: 30rem;
            }

            div {
                
                img {
                    margin-top: 7rem;
                    margin-left: 1.5rem;
                    width: 52rem;
                }

                p {
                    font-family: 'Archivo';
                    color: ${colors.fontColor};
                    font-size: 5.1rem;
                    margin-left: 1.5rem;
                }

                a {
                    font-family: 'Archivo';
                    color: ${colors.bgColor};
                    font-size: 5rem;
                    margin-left: 1.5rem;
                    text-decoration: none;
                }

            }

        }

    }

`

export const A = styled.a`

`