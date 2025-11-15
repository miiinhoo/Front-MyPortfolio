import { useEffect } from "react";
import useCustomHook from "../hooks/useCustomHook";

export default function SkillComponent({ data }) {
  const {
    string: text,
    setString: setText,
    number: lineIndex,
    setNumber: setLineIndex,
    numberB: charIndex,
    setNumberB: setCharIndex
  } = useCustomHook({});

  // 스킬이 바뀌면 타이핑 리셋
  useEffect(() => {
    setText("");
    setLineIndex(0);
    setCharIndex(0);
  }, [data]);

  // 타자 효과
  useEffect(() => {
    if (!data || !data.desc) return;

    const line = data.desc[lineIndex];
    if (!line) return;

    const timeout = setTimeout(() => {
        if(charIndex < line.length){
            setText(prev => prev + line[charIndex]);
            setCharIndex(prev => prev + 1);
        }else{
            setText(prev => prev + "\n");
            setLineIndex(prev => prev + 1);
            setCharIndex(0);
        }   
    }, 40);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, data]);

  if (!data) {
    return <p>왼쪽의 아이콘을 클릭해주세요.</p>;
  }

  return (
    <div className="skill-component">
      <div className="typing-text">
        {text}
        <span className="cursor"></span>
      </div>
    </div>
  );
}
