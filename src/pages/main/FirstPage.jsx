import { useEffect, useState } from "react";
import { Title } from "../../arrays/TitleArrays";

export default function FirstPage(){

    const [ index , setIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev)=> (prev + 1) % Title.length);
        },5500);
        return () => clearInterval(interval);
    },[Title.length]);

    return(
        <section>
            <div className="page-inner">
                <div className="text-wrapper">
                    <p className="font">Frontend Developer</p>
                    <h1 className="main-title">
                        Minho
                    </h1>
                    <div className="fade-text">
                        <div key={index} className="fade">
                            <p>{Title[index][0]}</p>
                            <p>{Title[index][1]}</p>
                        </div>
                    </div>
                    <h4 className="title">
                        <p>
                            안녕하세요, 프론트엔드 개발자 김민호입니다.
                        </p>
                        <p>
                            React와 TypeScript로 사용자 중심의 웹을 만듭니다.
                        </p>
                    </h4>
                </div>
            </div>
        </section>
        
    )
}