import toast from "react-hot-toast";
import ButtonComponent from "../../../components/common/ButtonComponent"


export default function WoodenPage() {
    return(
       <section className="work-block">
        <div className="page-inner">
            <h3 className="work-project-title">Wooden ERP 시스템 (7인 팀 프로젝트)</h3>
            <p className="work-project-sub">
              React + Spring Boot 기반의 사내 ERP 시스템으로, 프론트엔드 전체 구조와 공통 로직을 설계하고 구현했습니다.
            </p>

            <div className="work-list">
              <div>
                <h4>라우팅 / 접근 제어 설계</h4>
                <div className="text-inner">
                    <strong>
                        문제
                    </strong>
                    <p>
                        초기 로그인 기능을 로컬스토리지로 구현했는데,
                        페이지를 새로고침하거나 브라우저를 다시 열면 로그인 정보가 바로 날아가서
                        매번 다시 로그인해야 하는 문제가 있었습니다. 거기에 "/" 경로에서
                        무조건 "/login"으로 리다이렉트하는 Navigate를 사용해서,
                        로그인에 성공해도 다시 로그인 페이지로 튕기는 상황까지 발생했었습니다.
                    </p>
                    <strong>
                        원인
                    </strong>
                    <p>
                        로컬스토리지는 인증 검증이 없어, 새로고침시 상태가 보장되지 않았습니다.
                        거기다 라우터에서 "/"를 강제로 로그인페이지로 보내는 문제 때문에 
                        인증 체크보다 리다이렉트가 먼저 실행되어 로그인이 원할하지 못했습니다.
                    </p>
                    <strong>
                        해결
                    </strong>
                    <p>
                        로그인 상태를 loginSlice.jsx에서 전역으로 관리하게 바꾸고,
                        인증 토큰을 쿠키에 저장해서 재접속해도 로그인 유지되도록 구조를 바꿨습니다.
                        그리고 ProtectedRouter.jsx에서만 로그인 여부를 판단하도록 라우팅을 통합하여
                        비로그인은 로그인페이지로 이동시키고, 로그인된 사용자는 실제 페이지로 이동하도록 정리했습니다.
                        "/"에 Navigate도 제거하여 리다이렉트 문제가 완전히 해결됐습니다.
                    </p>
                    <strong>
                        결과
                    </strong>
                    <p>
                        새로고침이나 재접속 시에도 로그인 상태가 유지되고,
                        로그인 후 정상적으로 메인 페이지로 진입되는 인증 흐름이 완성됐습니다.
                        이후 라우팅·인증 관련 오류 없이 전체 페이지 개발이 안정적으로 진행됐습니다.
                    </p>
                </div>
              </div>

              <div>
                <h4>공통 CRUD 커스텀 훅(useCRUD) 설계</h4>
                <div className="text-inner">
                    
                    <strong>문제</strong>
                    <p>
                        도메인이 주문 / 발주 / 재고 / 계획 등으로 나뉘어 있고 각 페이지를 다른 사람이 맡아 작업하다 보니,
                        CRUD 로직이 페이지마다 제각각 작성되어 코드를 재사용하기 어려운 상황이었습니다.
                    </p>

                    <strong>원인</strong>
                    <p>
                        CRUD 로직이 각 페이지 내부에 흩어져 있어 재사용이 전혀 되지 않았고,
                        같은 기능을 구현하면서도 파일마다 로직 구조가 달라 일관성이 깨지고 있었습니다.
                        특히 formData 관리나 change 핸들러 같은 기본 동작까지 매번 다시 만들어야 했기 때문에
                        개발 속도도 느리고, 수정이 생기면 모든 페이지를 고쳐야 하는 비효율이 컸습니다.
                    </p>

                    <strong>해결</strong>
                    <p>
                        CRUD 동작 전체를 하나의 훅(useCRUD)으로 통합했습니다.
                        목록 조회, 신규 등록, 데이터 수정, 삭제 요청뿐만 아니라,
                        formData 관리, 입력 핸들링, 모달 열림/닫힘, 행 선택 상태까지 모두 공통 로직으로 묶었습니다.
                        페이지에서는 API 함수만 바꿔 끼우면 동일한 로직이 그대로 동작하도록 구조화했습니다.
                        이를 통해 모든 도메인 페이지의 CRUD 구조를 완전히 통일시켰습니다.
                    </p>

                    <strong>결과</strong>
                    <p>
                        중복 코드가 크게 줄어들어 유지보수 비용이 낮아졌고,
                        CRUD 구조가 통합되면서 팀원들이 동일한 패턴으로 개발할 수 있게 됐습니다.
                        API만 바꾸면 페이지가 바로 동작하기 때문에 개발 속도도 빨라졌고,
                        이후 기능 수정이 필요할 때도 useCRUD 한 곳만 수정하면 전체 페이지에 반영되는 구조가 완성됐습니다.
                    </p>

                </div>
            </div>


              <div>
                <h4>공통 UI 컴포넌트 제작</h4>
                <p>
                  버튼, 닫기 버튼, 이전 페이지 버튼, 서브메뉴 컴포넌트, 로그인 관련 컴포넌트 등을 공통 컴포넌트로 분리했습니다.
                  팀원이 각자 다른 스타일을 쓰지 않도록, 공통 컴포넌트를 통해 UI 일관성을 유지했습니다.
                </p>
              </div>

              <div>
                <h4>테이블 / 폼 구조 정의</h4>
                <p>
                  TableArrays와 각 페이지별 Arrays(예: PartOrderArrays, UserArrays)를 정의하여
                  백엔드 컬럼명과 화면 컬럼명이 한 곳에서 관리되도록 구성했습니다.
                  이 구조를 통해 컬럼 추가·수정 시, 화면과 API 매핑을 빠르게 수정할 수 있도록 했습니다.
                </p>
              </div>

              <div>
                <h4>API 계층 통합</h4>
                <p>
                  partOrderAPI, userAPI 등 각 도메인별 API 파일의 형식을 통일하고,
                  useCRUD와 함께 사용할 수 있도록 getAll / create / update / delete 형태로 추상화했습니다.
                </p>
              </div>

              <div>
                <h4>로그인 / 인증 흐름 구현</h4>
                <p>
                  로그인·회원가입 전용 페이지와 컴포넌트를 분리하고, useCustomLogin 훅을 통해 로그인 처리와 리다이렉트 로직을 관리했습니다.
                  쿠키 유틸을 사용하여 로그인 상태를 유지하고, Redux loginSlice와 연동해 전역 로그인 상태를 관리했습니다.
                </p>
              </div>

              <div>
                <h4>레이아웃 구조 설계</h4>
                <p>
                  HeaderLayout, AsideLayout, GuideMenuLayout, BasicLayout, UserInfoCard 등을 구성하여
                  모든 페이지가 동일한 레이아웃 프레임 내에서 동작하도록 설계했습니다.
                  로그인한 사용자의 정보를 상단/사이드에서 공통으로 사용할 수 있도록 연동했습니다.
                </p>
              </div>

              <div>
                <h4>스타일 / SCSS 통합</h4>
                <p>
                  로그인/회원가입, 테이블, 모달, 레이아웃 등의 스타일을 SCSS로 통합 관리했습니다.
                  중복되는 스타일은 변수와 믹스를 활용해 정리하고, 팀원별로 들쑥날쑥하던 화면 스타일을 하나의 톤으로 맞췄습니다.
                </p>
              </div>
            </div>
        </div>
        {/* 맨 밑으로 이동시키는 fixed처리된 버튼 */}
        <ButtonComponent types={"button"} cln={"downBtn"}
        event={() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
            toast.success("맨 밑으로 이동했습니다.")
        }}/>
        </section>
    )
}