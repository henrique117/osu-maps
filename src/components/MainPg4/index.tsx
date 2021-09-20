import * as S from "./styles"
import ciderPic from "assets/IMG/ciderPic.svg"
import ciderStars from "assets/IMG/ciderStar.svg"
import soundPic from "assets/IMG/soundPic.svg"
import soundStars from "assets/IMG/soundStar.svg"

const MainPg2 = () => {
    return (
        <S.MainPg2>
            <h1>Tech Maps</h1>
            <section>
                <picture>
                    <S.A href="" target="_self">
                        <img src={ciderPic} alt="" />
                    </S.A>
                    <div>
                        <img src={ciderStars} alt="" />
                        <S.A href="" target="_self">
                            <a href="">Future Cider</a>
                        </S.A>
                    </div>
                </picture>
            </section>
            <section>
                <picture>
                    <img src={soundPic} alt="" />
                    <div>
                        <img src={soundStars} alt="" />
                        <p>Sound Chimera</p>
                    </div>
                </picture>
            </section>
        </S.MainPg2>
    )
}

export default MainPg2