import * as S from "./styles"
import logo from "assets/IMG/Logo.svg"

const Header = () => {
    return (
        <S.Header>
            <picture>
                <a href="inicio.html">
                    <img src={logo} alt="" />
                </a>
            </picture>
            <div>
                <ul>
                    <li>
                        <a href="jumpMaps.html">Jump Maps</a>
                    </li>
                    <li>
                        <a href="streamMaps.html">Stream Maps</a>
                    </li>
                    <li>
                        <a href="techMaps.html">Tech Maps</a>
                    </li>
                </ul>
            </div>
        </S.Header>
    )
}

export default Header