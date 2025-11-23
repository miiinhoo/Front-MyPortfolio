import toast from "react-hot-toast";
import ButtonComponent from "../../../components/common/ButtonComponent"
import { LoginSlice,ProtectedRouter } from "../../../imgs/projects/common/project";

export default function WoodenPage() {
    return(
       <section className="work-block">
        <div className="page-inner">
            <h3 className="work-project-title">Wooden ERP 시스템 (7인 팀 프로젝트)</h3>
            <p className="work-project-sub">
              React + Spring Boot 기반의 사내 ERP 시스템으로, 프론트엔드 전체 구조와 공통 로직을 설계하고 구현했습니다.
            </p>

            <div className="work-list">

              {/* ------------ 라우팅 / 접근 제어 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper">
                    <img src={ProtectedRouter} alt="" />
                    <img src={LoginSlice} alt="" />
                </div>

                <div className="text-inner">
                    <h4>라우팅 / 접근 제어 설계</h4>
                    <strong>문제</strong>
                    <p>
                        초기 로그인 기능을 로컬스토리지로 구현했는데,
                        페이지를 새로고침하거나 브라우저를 다시 열면 로그인 정보가 바로 날아가서
                        매번 다시 로그인해야 하는 문제가 있었습니다. 거기에 "/" 경로에서
                        무조건 "/login"으로 리다이렉트하는 Navigate를 사용해서,
                        로그인에 성공해도 다시 로그인 페이지로 튕기는 상황까지 발생했었습니다.
                    </p>
                    <strong>원인</strong>
                    <p>
                        로컬스토리지는 인증 검증이 없어, 새로고침시 상태가 보장되지 않았습니다.
                        거기다 라우터에서 "/"를 강제로 로그인페이지로 보내는 문제 때문에 
                        인증 체크보다 리다이렉트가 먼저 실행되어 로그인이 원할하지 못했습니다.
                    </p>
                    <strong>해결</strong>
                    <p>
                        로그인 상태를 loginSlice.jsx에서 전역으로 관리하게 바꾸고,
                        인증 토큰을 쿠키에 저장해서 재접속해도 로그인 유지되도록 구조를 바꿨습니다.
                        그리고 ProtectedRouter.jsx에서만 로그인 여부를 판단하도록 라우팅을 통합하여
                        비로그인은 로그인페이지로 이동시키고, 로그인된 사용자는 실제 페이지로 이동하도록 정리했습니다.
                        "/"에 Navigate도 제거하여 리다이렉트 문제가 완전히 해결됐습니다.
                    </p>
                    <strong>결과</strong>
                    <p>
                        새로고침이나 재접속 시에도 로그인 상태가 유지되고,
                        로그인 후 정상적으로 메인 페이지로 진입되는 인증 흐름이 완성됐습니다.
                        이후 라우팅·인증 관련 오류 없이 전체 페이지 개발이 안정적으로 진행됐습니다.
                    </p>
                </div>
              </div>

              {/* ------------ CRUD 훅 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper"></div>

                
                <div className="text-inner">
                    <h4>공통 CRUD 커스텀 훅(useCRUD) 설계</h4>
                    <strong>문제</strong>
                    <p>
                        도메인이 주문 / 구매 / 생산 / 재고 등으로 나뉘어 있고 각 페이지를 다른 사람이 맡아 작업하다 보니,
                        CRUD 로직이 페이지마다 제각각 작성되어 코드를 재사용하기 어려운 상황이었습니다.
                        formData 관리, 이벤트 핸들러, 모달창 제어 등의 기본적인 로직들이 중복되거나 서로 다른 방식으로 구현되어 
                        유지보수와 확장성에서의 문제점을 발견했습니다.
                    </p>

                    <strong>원인</strong>
                    <p>
                        팀원들마다 페이지를 하나씩 나눠 개발이 이루어지다보니 초기에는 CRUD기능들이 각 페이지들마다 흩어져있었고,
                        동일한 동작임에도 코드의 구조나 작성방식이 서로 다른부분이 많아 일관성이 유지되지않았습니다.
                        페이지들마다 동일하게 사용하는 기능이지만, 재사용되지 않아 기능 추가나 수정 시 여러 파일을 동시에 고쳐야하는 작업을 하여 불필요한 시간소모가 있었습니다.
                    </p>

                    <strong>해결</strong>
                    <p>
                        발생했던 각각의 문제점에 대한 해결방법을 고안했었습니다.
                        그 결과, CRUD기능을 한 곳에서 통합하여 관리를 할 수 있는 useCRUD.jsx라는 커스텀 훅을 생성했습니다.
                        커스텀 훅 내부에 목록 조회, 등록, 수정, 삭제 요청 로직을 모두 넣고,
                        formData 업데이트, onChange 핸들러, 모달 제어, 선택 행 상태같은 반복적인 기능을 모두 공통으로 사용할 수 있도록 코드를 작성하였습니다.
                        각 페이지들에서는 필요한 API 함수만 주입하면 동일한 CRUD기능이 그대로 작동되도록 구조를 잡아서, 페이지들마다 따로 작성되던 중복코드를 완전히 제거했습니다.
                    </p>

                    <strong>결과</strong>
                    <p>
                        CRUD 로직이 하나로 통합되면서 모든 페이지에서 동일한 흐름으로 개발할 수 있었고, 
                        중복코드가 크게 줄어 코드의 줄을 기존보다 50%이상 줄여 유지보수하기 쉬운 구조로 리팩토링 하였습니다.
                        기능 수정이 필요할 때에도 useCRUD 한 곳만 고치면 전체페이지에 반영돼 확장성과 유지보수성이 크게 향상된 계기가 되었습니다.
                    </p>

                </div>
              </div>

              {/* ------------ 공통 UI ------------ */}
              <div className="work-list-items">
               
                <div className="work-images-wrapper"></div>

                
                <div className="text-inner">
                     <h4>공통 UI 컴포넌트 제작</h4>
                    <strong>문제</strong>
                    <p>
                        페이지마다 사용하는 버튼, 입력 필드, 모달 등이 제각각 구현되어 있어 
                        UI 일관성이 계속 깨지는 문제가 있었습니다. 디자이너 없이 진행되는 프로젝트였기 때문에
                        각각의 페이지가 따로 놀면서 스타일 격차가 점점 커졌고, 유지보수 시에도 매번 새로운 UI를 
                        다시 만들어야 하는 불편함이 있었습니다.
                    </p>

                    <strong>원인</strong>
                    <p>
                        각자 맡은 도메인 페이지에서 독립적으로 UI를 구현하다 보니,
                        같은 기능의 버튼이라도 스타일이나 동작 방식이 달라졌습니다.
                        기본적으로 반복되는 UI 요소가 공통 컴포넌트로 묶여 있지 않아
                        재사용이 어려웠고, 하나의 스타일 변경이 필요한 경우 모든 페이지를 직접 수정해야 했습니다.
                    </p>

                    <strong>해결</strong>
                    <p>
                        프로젝트 전체에서 반복적으로 사용되는 UI 요소를 공통 컴포넌트로 재구성했습니다.
                        버튼, 입력 폼, 모달, 서브메뉴 등의 요소들을 컴포넌트화 시켜서,
                        props 기반으로 텍스트, 클래스, 스타일, 이벤트 등을 제어할 수 있도록 만들었습니다.
                        스타일은 SCSS로 통일해 margin, font, table 등 UI 규칙이 전체 페이지에 동일하게 
                        적용되도록 설계했습니다. 새 페이지를 만들 때는 공통 컴포넌트만 조합하면 되도록 구조를 정리했습니다.
                    </p>

                    <strong>결과</strong>
                    <p>
                        UI가 완전히 통일되면서 페이지 간 스타일 격차가 사라지고 컴포넌트를 재사용하면서,
                        새로운 페이지 개발 시 UI의 구조를 잡는 시간이 감소했고, 디자인 변경이 필요할 때도 공통 컴포넌트만 수정하면 
                        전체 페이지에 반영되는 구조가 완성되었습니다.
                    </p>

                </div>
              </div>

              {/* ------------ 테이블/폼 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper"></div>

                
                <div className="text-inner">
                    <h4>테이블 / 폼 구조 정의</h4>
                    <strong>설계 의도</strong>
                    <p>
                        Spring Boot의 RequestDTO와 동일한 필드명을 가진 초기 폼 스키마(initForms)를
                        먼저 정의해두고, 모든 페이지가 이 스키마를 기반으로 동작하도록 구조를 설계했습니다.
                        프론트에서 사용하는 formData와 백엔드의 DTO 구조를 완전히 동일하게 맞춰
                        데이터 통신에서 발생할 수 있는 필드 불일치 오류를 사전에 방지하는 것이 목적이었습니다.
                    </p>

                    <strong>구조 설계</strong>
                    <p>
                        페이지들마다 입력 필드를 initForms 객체 안에 각각 정의하고,
                        각 페이지는 initFormData: () => initForms.partOrder와 같이
                        필요한 초기 폼 스키마만 useCRUD 훅에 주입하도록 구성했습니다.
                        이 스키마는 Spring Boot의 RequestDTO 필드명과 1:1로 매칭되어 있어,
                        formData를 그대로 전송해도 요청이 정상적으로 처리되는 형태입니다.
                    </p>

                    <strong>동작 방식</strong>
                    <p>
                        페이지가 로딩되면 전달된 초기 폼 스키마를 기준으로 formData가 자동 초기화되고,
                        useCRUD 내부에서 입력, 수정, 모달 제어가 동일한 흐름으로 처리됩니다.
                    </p>

                    <strong>효과</strong>
                    <p>
                        프론트와 백엔드가 같은 필드 구조를 공유하기 때문에 오류가 사라졌고,
                        신규 페이지를 만들 때도 initForms만 추가하면 Springboot의 필드명과 일치시킬 수 있게 됐습니다.
                    </p>

                </div>
              </div>

              {/* ------------ API 계층 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper"></div>

                
                <div className="text-inner">
                    <h4>API 계층 통합</h4>
                    <strong>설계 의도</strong>
                    <p>
                        페이지마다 개별적으로 axios 요청을 작성하면 CRUD 훅과의 연동이 복잡해지기 때문에,
                        useCRUD에서 바로 사용할 수 있는 통합 API 계층을 처음부터 함께 설계했습니다.
                        도메인별로 공통된 요청/응답 규칙을 만들고, 모든 페이지가 동일한 API 구조 위에서
                        동작하도록 만드는 것이 목표였습니다.
                    </p>

                    <strong>구조 설계</strong>
                    <p>
                        주문 / 구매 / 생산 / 재고 등 각 페이지를 모듈 단위로 나누고
                        api.order.getAll, api.order.create, api.order.update,
                        api.buyer.delete처럼 한눈에 기능이 보이도록 구조화했습니다.
                        API 함수는 useCRUD 훅에 그대로 주입할 수 있게 통일된 인터페이스 형태로 만들었습니다.
                    </p>

                    <strong>동작 방식</strong>
                    <p>
                        각 페이지에서는 필요한 API 함수만 선택해서 useCRUD에 넘기면 되고,
                        내부에서는 동일한 흐름(조회 → 입력 → 수정 → 삭제)으로 동작합니다.
                        API 계층에서 모든 요청/응답 구조가 통일되어 있기 때문에
                        CRUD 훅은 API 수정만으로 페이지에 맞게 바로 동작할 수 있는 형태가 되었습니다.
                    </p>

                    <strong>효과</strong>
                    <p>
                        useCRUD와 API 레이어가 하나의 구조로 묶이면서 페이지를 추가하는 작업을 진행할 때에 난이도가 낮아졌습니다.
                    </p>

                </div>
              </div>

              {/* ------------ 레이아웃 ------------ */}
              <div className="work-list-items">
                
                <div className="work-images-wrapper"></div>

                
                <div className="text-inner">
                    <h4>레이아웃 구조 설계</h4>
                    <strong>설계 의도</strong>
                    <p>
                        주문, 구매, 생산, 재고 등 각 페이지를 여러 사람이 나누어 개발하는 구조였기 때문에,
                        공통 레이아웃이 잡혀 있지 않으면 화면 배치나 흐름이 페이지마다 달라질 수밖에 없었습니다.
                        프로젝트 전체의 UI 일관성과 개발 효율을 높이기 위해,
                        페이지 개발에 들어가기 전에 공통 레이아웃을 먼저 설계해 팀원들이 같은 틀 안에서
                        기능만 구현하도록 기준을 잡았습니다.
                    </p>

                    <strong>구조 설계</strong>
                    <p>
                        기본 레이아웃은 좌측 서브메뉴 영역, 상단 헤더 영역, 우측 메인 콘텐츠 영역으로 구성했습니다.
                        헤더는 로고, 주메뉴, 사용자 정보 표시 부분으로 분리해 전체 공통 UI로 사용했고,
                        메인 영역은 CRUD 기능, 테이블, 폼이 들어가는 공간으로 고정해
                        어떤 페이지가 들어와도 동일한 화면 구조가 유지되도록 설계했습니다.
                    </p>

                    <strong>동작 방식</strong>
                    <p>
                        공통 레이아웃 상위에 Outlet을 배치해,
                        각 도메인 페이지는 라우터를 통해 자동으로 메인 영역에 주입되도록 구성했습니다.
                        팀원들은 각자 맡은 페이지 컴포넌트만 작성하면 되고,
                        나머지 레이아웃(서브메뉴, 헤더, 메인 틀)은 그대로 유지되기 때문에
                        CRUD 훅, initForms, 테이블 구조가 동일한 패턴으로 동작할 수 있도록 하였습니다.
                    </p>

                    <strong>효과</strong>
                    <p>
                        모든 도메인 페이지가 동일한 레이아웃 규칙 안에서 개발되어
                        UI 흐름이 흔들리지 않고 유지되었습니다.
                        페이지 추가나 기능 확장 시에도 레이아웃을 신경 쓸 필요가 없어
                        팀 전체의 개발 속도와 유지보수 효율이 크게 향상되었습니다.
                    </p>

                </div>
              </div>

            </div>
        </div>

        <ButtonComponent
          types={"button"}
          cln={"downBtn"}
          event={() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
            toast.success("맨 밑으로 이동했습니다.");
          }}
        />
        </section>
    )
}
