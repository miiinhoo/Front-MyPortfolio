
import FirstPage from "./main/FirstPage";
import Footer from "./main/Footer";
import SecondPage from "./main/SecondPage";
import ThirdPage from "./main/ThirdPage";

export default function MainPage(){
    return(
        <div className="main-content">
            <div className="sticky-zone">
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