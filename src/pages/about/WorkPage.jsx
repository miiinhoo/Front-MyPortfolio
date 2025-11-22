import { Link, Outlet } from "react-router-dom"

export default function WorkPage(){
    return(
        <>
            <section className="pages">
                <div className="page-inner work">
                    <Outlet/>
                    <div className="centered-box">
                        <Link to={"wooden"}
                         className="site-box">
                            <h3>
                                Wooden 팀 프로젝트
                            </h3>
                            <p>React + Springboot + Python</p>
                        </Link>
                        <Link to={"python"}
                         className="site-box">
                            <h3>
                                ARIMA 예측치 시각화 팀 프로젝트
                            </h3>
                            <p>Python + ARIMA</p>
                        </Link>
                        <Link to={"paytime"}
                         className="site-box">
                            <h3>
                                Paytime 개인 프로젝트
                            </h3>
                            <p>React + Typescript + Firebase</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
        
    )
}