import useCustomHook from "../../hooks/useCustomHook";
import SwiperPage from "./SwiperPage";
import ButtonComponent from "../../components/common/ButtonComponent";
import "./Swiper.scss";
import { Button } from "../../arrays/SwiperArrays";
import { useState } from "react";

export default function ThirdPage(){

    return(
        <section>
            <div className="page-inner">
                <h2>Project & Design</h2>
                <SwiperPage/>
            </div>
        </section>
        
    )
}