import * as S from "./styles"
import logo from "assets/IMG/Logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <S.Header>
            <picture>
                <Link to="">
                    <img src={logo} alt="" />
                </Link>
            </picture>
            <div>
                <ul>
                    <li>
                        <Link to="">Jump Maps</Link>
                    </li>
                    <li>
                        <Link to="">Stream Maps</Link>
                    </li>
                    <li>
                        <Link to="">Tech Maps</Link>
                    </li>
                </ul>
            </div>
        </S.Header>
    )
}

export default Header