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
          "시맨틱 태그를 사용해 페이지의 기본 구조를 설계해본 경험이 있습니다.",
          "작업 중 레이아웃이 붕괴되는 문제가 있었는데 display와 box-sizing을 조정하여 해결했습니다."
        ]
      },
      {
        img: CSS3,
        label: "CSS3",
        desc: [
          "Flex와 Grid를 활용해 반응형 레이아웃을 구성해본 경험이 있습니다.",
          "sticky가 적용되지 않던 문제는 부모 요소의 height와 overflow 조건을 수정하여 해결했습니다."
        ]
      },
      {
        img: SCSS,
        label: "SCSS",
        desc: [
          "컴포넌트 단위로 SCSS 파일을 분리하여 스타일을 구성해왔습니다.",
          "object-fit의 비율이 깨지는 문제는 padding과 contain 조합으로 해결했습니다.",
          "아이콘 크기 불균형 문제는 width/height 고정 및 grid 조절을 통해 해결했습니다."
        ]
      },
      {
        img: JS,
        label: "JavaScript",
        desc: [
          "PayTimer에서 데이터 처리와 UI 업데이트 로직을 JavaScript로 구현했습니다.",
          "map과 filter 사용 중 undefined가 발생하던 문제는 초기값 구조를 재정비하여 해결했습니다."
        ]
      },
      {
        img: TS,
        label: "TypeScript",
        desc: [
          "Wooden ERP에서 CRUD 기반 데이터 모델링을 TypeScript로 진행했습니다.",
          "제네릭 타입 불일치 문제는 Partial<T>를 활용하여 해결했습니다.",
          "formData 타입 충돌은 유니온 타입으로 재정의해 해결했습니다."
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
          "Wooden ERP 팀프로젝트의 전체 UI 구조를 React 기반으로 직접 설계했습니다.",
          "배포 후 새로고침을 했을 때, 404 오류는 Vercel rewrites 설정으로 해결했습니다.",
          "상태가 정상적으로 갱신되지 않던 문제는 불변성을 유지하며 구조를 재정비해 해결했습니다.",
          "useEffect가 반복 실행되던 문제는 의존성 배열을 정리하여 해결했습니다."
        ]
      },
      {
        img: AXIOS,
        label: "Axios",
        desc: [
          "Axios을 사용하여 ERP API 연동 로직을 관리했습니다.",
          "Wooden ERP 프로젝트에서 CORS문제가 발생하였는데, 백엔드 헤더 설정 및 프록시 조정으로 해결했습니다.",
        ]
      },
      {
        img: REDUX,
        label: "Redux",
        desc: [
          "ERP 여러 모듈의 상태를 Redux Store 하나로 통합하여 관리했습니다.",
          "비동기 로직이 꼬이던 문제는 extraReducers로 요청 단계를 구분하여 해결했습니다.",
          "Slice 기반 구조화를 통해 유지보수성을 강화했습니다."
        ]
      },
      {
        img: JQUERY,
        label: "jQuery",
        desc: [
          "초기 웹 퍼블리싱 단계에서 DOM 조작 용도로 활용해본 경험이 있습니다.",
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
          "PayTimer의 사용자 인증(Auth)과 Firestore CRUD 기능을 Firebase로 구현했습니다.",
          "관리자 custom claim이 적용되지 않던 문제는 getIdTokenResult(true)로 재발급하여 해결했습니다.",
          "Firestore 규칙으로 인해 발생한 읽기 오류는 security rules 수정을 통해 해결했습니다.",
        ]
      },
      {
        img: VERCEL,
        label: "Vercel",
        desc: [
          "React 포트폴리오를 Vercel로 배포하며 배포 구조를 직접 설정했습니다.",
          "새로고침 시 404 오류는 vercel.json rewrites 설정으로 해결했습니다.",
          "빌드 루트 설정 문제로 배포가 실패했을 때는 프로젝트 루트를 재정비해 해결했습니다.",
          "Firebase 환경 변수가 반영되지 않던 문제는 캐시 초기화 후 재배포하여 해결했습니다."
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
          "feature/main/dev 브랜치를 분리하여 작업한 경험이 있습니다.",
          "push 거부(non-fast-forward) 오류는 pull --rebase 명령으로 해결했습니다.",
          "remote와 local 충돌로 발생한 merge conflict도 직접 해결했습니다."
        ]
      },
      {
        img: GITHUB,
        label: "GitHub",
        desc: [
          "팀·개인 프로젝트 저장소를 관리하며 PR 기반 코드 정리를 경험했습니다.",
          "GitHub Pages에서 JS 변경 사항이 반영되지 않던 문제는 캐시 및 파일 경로 수정으로 해결했습니다.",
          "저장소 공개/비공개 전환 과정에서 URL이 깨지는 문제도 재설정을 통해 해결했습니다."
        ]
      },
    ]
  }
];
