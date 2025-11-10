export default function Profile() {
  return (
    <section>
      <div className="page-inner">
        <div className="text-left w-2/3 m-auto text-2xl mt-14">
            <div className="intro">
            <h2 className="font-extrabold text-center mb-[1rem] mt-[1rem]">About Me</h2>
            <p>
                안녕하세요. 사용자 경험을 중심으로 코드를 설계하는 
                <strong> 프론트엔드 개발자 김민호</strong>입니다.
            </p>
            <p>
                React와 TypeScript를 중심으로, 단순히 동작하는 코드가 아닌 
                <strong> 유지보수가 쉬운 구조</strong>를 설계하는 데 집중하고 있습니다.
            </p>
            </div>

            <div className="story">
            <h3 className="font-extrabold text-center mb-[1rem] mt-[1rem]">My Journey</h3>
            <p>
                웹 퍼블리셔로 시작해 UI의 구조와 디자인을 다루며,
                코드의 ‘겉모습’보다 ‘구조’의 중요성을 배웠습니다.
            </p>
            <p>
                그 경험을 기반으로 프론트엔드 개발로 확장하며, 
                데이터 흐름과 상태 관리, 재사용 가능한 로직 구조에 매력을 느꼈습니다.
            </p>
            </div>

            <div className="experience">
            <h3 className="font-extrabold text-center mb-[1rem] mt-[1rem]">Core Experience</h3>
            <ul>
                <li>
                <strong>Wooden ERP 시스템(팀 프로젝트)</strong> — 
                공통 로직을 커스텀 훅(useCRUD)으로 통합하여 코드 재사용성 향상
                </li>
                <li>
                <strong>PayTimer (개인 프로젝트)</strong> — 
                Firebase 기반 인증/댓글/관리자 기능 구현
                </li>
            </ul>
            </div>

            <div className="vision">
            <h3 className="font-extrabold text-center mb-[1rem] mt-[1rem]">Development Direction</h3>
            <p>
                지금은 멋있어 보이는 코드보다,
                나중에 봐도 바로 이해되는 코드가 잘 짠 코드라고 생각합니다.
            </p>
            </div>

            <div className="contact">
            <h3 className="font-extrabold text-center mb-[1rem] mt-[1rem]">Contact</h3>
            <p className="text-center">📧 alsgh4454@naver.com</p>
            <p className="text-center">💻 <a href="https://github.com/miiinhoo" target="_blank">GitHub</a></p>
            </div>
        </div>

        

      </div>
    </section>
  );
}
