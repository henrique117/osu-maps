import * as S from "./styles"
import byePic from "assets/IMG/byePic.svg"
import byeStars from "assets/IMG/byeStar.svg"
import lemonPic from "assets/IMG/lemonPic.svg"
import lemonStars from "assets/IMG/lemonStar.svg"

const MainPg2 = () => {
    return (
        <S.MainPg2>
            <h1>Jump Maps</h1>
            <section>
            <picture>
                <S.A href="" target="_self">
                    <img src={lemonPic} alt="" />
                </S.A>
                <div>
                    <img src={lemonStars} alt="" />
                    <S.A href="" target="_self">
                        <a href="">Lemon Tree</a>
                    </S.A>
                </div>
            </picture>
            </section>
            <section>
                <picture>
                    <img src={byePic} alt="" />
                    <div>
                        <img src={byeStars} alt="" />
                        <p>Good Bye Moonman</p>
                    </div>
                </picture>
            </section>
        </S.MainPg2>
    )
}

export default MainPg2