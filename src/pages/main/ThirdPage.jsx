import useCustomHook from "../../hooks/useCustomHook";
import SwiperPage from "./SwiperPage";
import ButtonComponent from "../../components/common/ButtonComponent";
import "./Swiper.scss";

export default function ThirdPage(){
    const { bool,setBool,boolB: openSide, setBoolB:setOpenSide } = useCustomHook();
    return(
        <section>
            <div className="page-inner">
                <div className="button-area">
                    <ButtonComponent text={"Project & Design"} 
                    event={() => {setBool(prev => !prev);setOpenSide(true)}}
                    cln="bold"/>
                    {bool ? (
                        <div className={"floatBox"}>
                            <ButtonComponent text={"Project"} 
                            event={() => setOpenSide(true)}
                            cln={openSide ? "bold":""}/>
                            <ButtonComponent text={"Design"} 
                            event={() => setOpenSide(false)}
                            cln={!openSide ? "bold":""}/>
                        </div>                        
                        ):(<></>)}
                </div>
                
                <SwiperPage openSide={openSide}/>
            </div>
        </section>
        
    )
}