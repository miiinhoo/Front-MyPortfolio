import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../arrays/NavArrays";
import { useAdmin } from "../../routers/protected/AdminContext";
import ButtonComponent from "../../components/common/ButtonComponent";
import useCustomHook from "../../hooks/useCustomHook";
import useAuth from "../../hooks/useAuth";
import { useDropdownStore } from "../../utils/zustandSettings";

export default function BasicHeader() {
  const { isAdmin } = useAdmin();
  const { location } = useCustomHook();
  const navigate = useNavigate();

  // ------useAuth에 어드민 로그아웃 기능을 담게 함--------
  const { handleAdminLogout } = useAuth();

  // zustand store에서 headerDropdownOpen 상태 전역 관리
  const headerDropdownOpen = useDropdownStore(state => state.headerDropdownOpen);
  const setHeaderDropdownOpen = useDropdownStore(state => state.setHeaderDropdownOpen);
  const toggleHeaderDropdown = useDropdownStore(state => state.toggleHeaderDropdown);

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
                if (item.text === "About") setHeaderDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (item.text === "About") setHeaderDropdownOpen(false);
              }}
            >
              {item.text === "About" ? (
                <>
                  {/* PC: hover / 모바일: 클릭 토글 */}
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => toggleHeaderDropdown((prev) => !prev)}
                  >
                    About
                  </button>

                  <ul
                    className={
                      "abs" + (headerDropdownOpen ? " down" : "")
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
                              setHeaderDropdownOpen(false);
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
            // -------handleAdminLogout함수로 변경--------
            event={handleAdminLogout}
            types={"button"}
            cln={"admin-logout"}
          />
        )}
      </nav>
    </div>
  );
}
