import useCustomHook from "../../hooks/useCustomHook";
import SwiperPage from "./SwiperPage";
import ButtonComponent from "../../components/common/ButtonComponent";
import "./Swiper.scss";
import { Button } from "../../arrays/SwiperArrays";
import { useState } from "react";

export default function ThirdPage(){
    const { bool,setBool } = useCustomHook();
    const [ string, setString ] = useState("Front");
    return(
        <section>
            <div className="page-inner">
                <div className="button-area">
                    <ButtonComponent text={"Project & Design"} 
                    event={() => {setBool(prev => !prev);setOpenSide(true)}}
                    cln="bold"/>
                    {bool ? (
                        <div className={"floatBox"}>
                            {
                                Button.map((temp,index) => (
                                    <ButtonComponent
                                    key={index}
                                        text={temp.text}
                                        event={() => setString(temp.text)}
                                        cln={string === temp.text ? "bold":""}
                                    />
                                ))
                            }
                        </div>                        
                        ):(<></>)}
                </div>
                
                <SwiperPage string={string}/>
            </div>
        </section>
        
    )
}