import useCustomHook from "../../hooks/useCustomHook";
import SwiperPage from "./SwiperPage";
import ButtonComponent from "../../components/common/ButtonComponent";
import "./Swiper.scss";

export default function ThirdPage(){
    const { bool,setBool } = useCustomHook();
    return(
        <section>
            <div className="page-inner">
                <div className="button-area">
                    <ButtonComponent text={"Front"} 
                    event={() => setBool(true)}
                    cln={bool ? "bold":""}/>
                    <ButtonComponent text={"Team"} 
                    event={() => setBool(false)}
                    cln={!bool ? "bold":""}/>
                </div>
                
                <SwiperPage bool={bool}/>
            </div>
        </section>
        
    )
}