import * as S from "./styles"
import logo from "assets/IMG/Logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <S.Header>
            <picture>
                <S.A href="/" target="_self">
                    <img src={logo} alt="" />
                </S.A>
            </picture>
            <div>
                <ul>
                    <li>
                        <S.A href="jumpMaps" target="_self">
                            <h1>Jump Maps</h1>
                        </S.A>
                    </li>
                    <li>
                        <S.A href="streamMaps" target="_self">
                            <h1>Stream Maps</h1>
                        </S.A>
                    </li>
                    <li>
                        <S.A href="techMaps" target="_self">
                            <h1>Tech Maps</h1>
                        </S.A>
                    </li>
                </ul>
            </div>
        </S.Header>
    )
}

export default Header