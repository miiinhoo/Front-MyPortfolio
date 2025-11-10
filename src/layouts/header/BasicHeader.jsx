import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../arrays/NavArrays";
import { useAdmin } from "../../routers/protected/AdminContext";
import ButtonComponent from "../../components/common/ButtonComponent";
import { logoutAdmin } from "../../api/FirebaseAPI";
import useCustomHook from "../../hooks/useCustomHook";

export default function BasicHeader() {
  const { isAdmin } = useAdmin();
  const { bool: openDropDown, setBool: setOpenDropDown,location } = useCustomHook();
  const navigate = useNavigate();

  return (
    <div className="header-inner">
      <div className="main-logo">
        <h1>
          <Link to="/">Minho</Link>
        </h1>
      </div>

      <nav id="gnb">
        <ul className="rel">
          {Nav.map((item) => (
            <li
              key={item.id}
              className={"nav-item" + 
                (
                item.text === "About"
                    ? (location.pathname.includes("/about") ? " bold" : "")
                    : (location.pathname === item.path ? " bold" : "")
                )
              }
              // About일 때만 hover 열기/닫기
              onMouseEnter={() => {
                if (item.text === "About") setOpenDropDown(true);
              }}
              onMouseLeave={() => {
                if (item.text === "About") setOpenDropDown(false);
              }}
            >
              {item.text === "About" ? (
                <>
                  {/* PC: hover / 모바일: 클릭 토글 */}
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setOpenDropDown((prev) => !prev)}
                  >
                    About
                  </button>

                  <ul
                    className={
                      "abs" + (openDropDown ? " down" : "")
                    }
                  >
                    {item.option?.map((label) => {
                      const path = `/about/${label.toLowerCase()}`;
                      return (
                        <li key={label}>
                          <button
                            type="button"
                            className="dropdown-link"
                            onClick={() => {
                              setOpenDropDown(false);
                              navigate(path);
                            }}
                          >
                            {label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : item.path?.startsWith("http") ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  {item.text}
                </a>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {isAdmin && (
          <ButtonComponent
            text={"관리자 로그아웃"}
            event={logoutAdmin}
            types={"button"}
            cln={"admin-logout"}
          />
        )}
      </nav>
    </div>
  );
}
