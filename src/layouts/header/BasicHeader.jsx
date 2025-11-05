import { Link } from "react-router-dom";
import { Nav } from "../../arrays/NavArrays";
import { useAdmin } from "../../routers/protected/AdminContext";
import ButtonComponent from "../../components/common/ButtonComponent";
import { logoutAdmin } from "../../api/FirebaseAPI";

export default function BasicHeader(){
    const { isAdmin } = useAdmin();
    return(
        <div className="header-inner">
            <div className="main-logo">
                <h1>
                    <Link to="/">
                        Minho
                    </Link>
                </h1>
            </div>
            <nav id="gnb">
                <ul>
                    {Nav.map(title => 
                    <li key={title.id}>
                        <Link to={title.path}>{title.text}</Link>
                    </li>
                )}
                </ul>
                {isAdmin && (
                    <ButtonComponent text={"관리자 로그아웃"} event={() => logoutAdmin()} types={"button"} cln={"admin-logout"}/>
                )}
            </nav>
        </div>
    )
}