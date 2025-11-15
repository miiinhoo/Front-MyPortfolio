import HTML from '../imgs/HTML5.png';
import CSS3 from '../imgs/CSS3.png';
import SCSS from '../imgs/SCSS.png';
import JS from '../imgs/JS.png';
import TS from '../imgs/Typescript.png';
import REACT from '../imgs/REACT.jpg';
import AXIOS from '../imgs/AXIOS.png';
import REDUX from '../imgs/REDUX.png';
import JQUERY from '../imgs/JQUERY.png';
import FIREBASE from '../imgs/FB.png';
import VERCEL from '../imgs/VERCEL.png';
import GIT from '../imgs/GIT.png';
import GITHUB from '../imgs/GITHUB.jpg';

export const Skills = [
  {
    id: 1,
    category: "Programming Language",
    items: [
      {
        img: HTML,
        label: "HTML5",
        desc: [
          `웹 퍼블리싱 시작 단계에서 구조 설계에 활용해 본
           경험이 있으며, 시맨틱 태그로 SEO와 접근성을 고려해
           마크업을 진행했습니다.`,
           `레이아웃 붕괴 문제 발생> display / box-sizing 조정으로 해결`
        ]
      },
      {
        img: CSS3,
        label: "CSS3",
        desc: [
          "반응형 UI 구현",
          "레이아웃 정렬(Flex, Grid)과 애니메이션 활용"
        ]
      },
      {
        img: SCSS,
        label: "SCSS",
        desc: [
          "컴포넌트 단위 스타일 파일 분리",
          "변수·mixin·중첩문으로 유지보수 쉬운 구조 구성"
        ]
      },
      {
        img: JS,
        label: "JavaScript",
        desc: [
          "PayTimer에서 실질적 데이터 처리 로직 작성",
          "비동기 처리를 활용한 UI 업데이트 경험"
        ]
      },
      {
        img: TS,
        label: "TypeScript",
        desc: [
          "Wooden ERP에서 CRUD 기반 데이터 모델링에 사용",
          "타입 안정성을 기반으로 안정적인 상태 관리"
        ]
      },
    ]
  },

  {
    id: 2,
    category: "Library",
    items: [
      {
        img: REACT,
        label: "React",
        desc: [
          "Wooden ERP UI 전체 구조 React 기반으로 설계",
          "useCRUD 등 공통 커스텀 훅 제작으로 재사용성 확보",
          "Router 구조 설계 및 각 페이지 컴포넌트화"
        ]
      },
      {
        img: AXIOS,
        label: "Axios",
        desc: [
          "Wooden ERP API 연동을 axios 기반으로 통합 관리",
          "공통 axios instance 구성 및 interceptor 적용",
          "에러 처리/로딩 처리 분리 경험"
        ]
      },
      {
        img: REDUX,
        label: "Redux",
        desc: [
          "ERP 각 모듈들의 상태를 단일 Store에서 관리",
          "복잡한 상태 흐름을 구조화하여 유지보수성 향상",
          "action·reducer 분리 패턴 적용"
        ]
      },
      {
        img: JQUERY,
        label: "jQuery",
        desc: [
          "초기 웹 퍼블리싱 단계에서 간단한 DOM 조작 경험",
          "현재는 React 중심으로 사용 빈도 낮음"
        ]
      },
    ]
  },

  {
    id: 3,
    category: "Server / Deploy",
    items: [
      {
        img: FIREBASE,
        label: "Firebase",
        desc: [
          "PayTimer 인증(Auth) / Firestore CRUD 구현",
          "댓글·관리자 기능 시스템 구축",
          "Hosting을 통한 빠른 배포 경험"
        ]
      },
      {
        img: VERCEL,
        label: "Vercel",
        desc: [
          "React 기반 개인 포폴 배포",
          "도메인 연결 및 build 환경 관리",
          "Firebase와 연동해 SSR 없이 CSR로 구성"
        ]
      },
    ]
  },

  {
    id: 4,
    category: "Other",
    items: [
      {
        img: GIT,
        label: "Git",
        desc: [
          "브랜치 전략(feature/main/dev)으로 협업 경험",
          "merge conflict 해결 및 버전관리 수행"
        ]
      },
      {
        img: GITHUB,
        label: "GitHub",
        desc: [
          "팀/개인 프로젝트 저장소 관리",
          "PR 기반 코드 리뷰와 버전 기록 관리"
        ]
      },
    ]
  }
];
