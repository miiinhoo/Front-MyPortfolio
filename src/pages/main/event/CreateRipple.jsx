export function CreateRipple (e,text) {
  const slide = e.currentTarget;

  // 기존 버블 제거
  const old = slide.querySelector(".slide-bubble");
  if (old) old.remove();

  const rect = slide.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const bubble = document.createElement("div");
  bubble.className = "slide-bubble";
  bubble.innerText = text;  // 포트폴리오 이름 삽입

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  slide.appendChild(bubble);
  };
  