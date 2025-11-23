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
                <strong>라우팅 / 접근 제어 설계</strong>
                <p>
                  메인 GNB와 도메인별 서브 라우터(주문·발주·재고·계획 등)를 분리하여 SPA 구조를 설계했습니다.
                  ProtectedRouter를 만들어 로그인 여부에 따라 페이지 접근을 제어하고, 비로그인 사용자는 로그인 페이지로 리다이렉트되도록 구성했습니다.
                </p>
              </div>

              <div>
                <strong>공통 CRUD 커스텀 훅(useCRUD) 설계</strong>
                <p>
                  목록 조회, 등록, 수정, 삭제 로직을 공통 훅으로 추출하여, 각 페이지에서 API만 교체하면 재사용할 수 있도록 구조화했습니다.
                  formData 관리, 입력 핸들링, 모달 열림/닫힘, 선택 행 상태 관리까지 한 번에 처리할 수 있도록 설계해 중복 코드를 크게 줄였습니다.
                </p>
              </div>

              <div>
                <strong>공통 UI 컴포넌트 제작</strong>
                <p>
                  버튼, 닫기 버튼, 이전 페이지 버튼, 서브메뉴 컴포넌트, 로그인 관련 컴포넌트 등을 공통 컴포넌트로 분리했습니다.
                  팀원이 각자 다른 스타일을 쓰지 않도록, 공통 컴포넌트를 통해 UI 일관성을 유지했습니다.
                </p>
              </div>

              <div>
                <strong>테이블 / 폼 구조 정의</strong>
                <p>
                  TableArrays와 각 페이지별 Arrays(예: PartOrderArrays, UserArrays)를 정의하여
                  백엔드 컬럼명과 화면 컬럼명이 한 곳에서 관리되도록 구성했습니다.
                  이 구조를 통해 컬럼 추가·수정 시, 화면과 API 매핑을 빠르게 수정할 수 있도록 했습니다.
                </p>
              </div>

              <div>
                <strong>API 계층 통합</strong>
                <p>
                  partOrderAPI, userAPI 등 각 도메인별 API 파일의 형식을 통일하고,
                  useCRUD와 함께 사용할 수 있도록 getAll / create / update / delete 형태로 추상화했습니다.
                </p>
              </div>

              <div>
                <strong>로그인 / 인증 흐름 구현</strong>
                <p>
                  로그인·회원가입 전용 페이지와 컴포넌트를 분리하고, useCustomLogin 훅을 통해 로그인 처리와 리다이렉트 로직을 관리했습니다.
                  쿠키 유틸을 사용하여 로그인 상태를 유지하고, Redux loginSlice와 연동해 전역 로그인 상태를 관리했습니다.
                </p>
              </div>

              <div>
                <strong>레이아웃 구조 설계</strong>
                <p>
                  HeaderLayout, AsideLayout, GuideMenuLayout, BasicLayout, UserInfoCard 등을 구성하여
                  모든 페이지가 동일한 레이아웃 프레임 내에서 동작하도록 설계했습니다.
                  로그인한 사용자의 정보를 상단/사이드에서 공통으로 사용할 수 있도록 연동했습니다.
                </p>
              </div>

              <div>
                <strong>스타일 / SCSS 통합</strong>
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