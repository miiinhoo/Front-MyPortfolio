import MacStyleComponent from "../components/MacStyleComponent";
import BasicAside from "../layouts/BasicAside";
import FirstPage from "./main/FirstPage";
import Footer from "./main/Footer";
import SecondPage from "./main/SecondPage";
import ThirdPage from "./main/ThirdPage";

export default function MainPage(){
    return(
        <div className="main-content">
            <MacStyleComponent/>
            <div className="sticky-zone">
                <BasicAside/>
                <FirstPage/>
                <SecondPage/>
                
            </div>
                <ThirdPage/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}