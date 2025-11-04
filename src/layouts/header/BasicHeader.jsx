import { Link } from "react-router-dom";
import { Nav } from "../../arrays/NavArrays";

export default function BasicHeader(){
    return(
        <div className="header-inner">
            <div className="main-logo">
                <Link>
                    Minho
                </Link>
            </div>
            <nav id="gnb">
                <ul>
                    {Nav.map(title => 
                    <li key={title.id}>
                        <Link to={title.path}>{title.text}</Link>
                    </li>
                )}
                </ul>
            </nav>
        </div>
    )
}