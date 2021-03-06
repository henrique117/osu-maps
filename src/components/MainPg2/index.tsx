import * as S from "./styles"
import sidetrackedPic from "assets/IMG/sidetrackedPic.svg"
import sidetrackedStars from "assets/IMG/sidetrackedStar.svg"
import heavenPic from "assets/IMG/heavenPic.svg"
import heavenStars from "assets/IMG/heavenStar.svg"

const MainPg2 = () => {
    return (
        <S.MainPg2>
            <h1>Stream Maps</h1>
            <section>
                <picture>
                    <S.A href="" target="_self">
                        <img src={sidetrackedPic} alt="" />
                    </S.A>
                    <div>
                        <img src={sidetrackedStars} alt="" />
                        <S.A href="" target="_self">
                            <a href="">Sidetracked Day</a>
                        </S.A>
                    </div>
                </picture>
            </section>
            <section>
                <picture>
                    <img src={heavenPic} alt="" />
                    <div>
                        <img src={heavenStars} alt="" />
                        <p>Ascension to Heaven</p>
                    </div>
                </picture>
            </section>
        </S.MainPg2>
    )
}

export default MainPg2