import useCustomHook from "../../hooks/useCustomHook";
import SwiperPage from "./SwiperPage";
import ButtonComponent from "../../components/common/ButtonComponent";
import "./Swiper.scss";

export default function ThirdPage(){
    const { bool,setBool, boolB: openSide, setBoolB:setOpenSide } = useCustomHook();
    return(
        <section>
            <div className="page-inner">
                <div className="button-area">
                    <ButtonComponent text={"Front & Design"} 
                    event={() => {setBool(true);setOpenSide(true)}}
                    cln={bool ? "bold":""}/>
                    {bool ? (
                        <div className={"floatBox"}>
                            <ButtonComponent text={"Front"} 
                            event={() => setOpenSide(true)}
                            cln={openSide ? "bold":""}/>
                            <ButtonComponent text={"Design"} 
                            event={() => setOpenSide(false)}
                            cln={!openSide ? "bold":""}/>
                        </div>                        
                        ):(<></>)}
                    <ButtonComponent text={"Team"} 
                    event={() => setBool(false)}
                    cln={!bool ? "bold":""}/>
                </div>
                
                <SwiperPage bool={bool} openSide={openSide}/>
            </div>
        </section>
        
    )
}