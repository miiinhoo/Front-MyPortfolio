export default function SkillComponent({ data }){
    if(!data){
        return(
            <p>
                왼쪽의 아이콘을 클릭하세요.
            </p>
        )
    }
    return(
        <div className="skill-component">
            <div className="window">
                {data.desc?.map((line, idx) => (
                <p key={idx}>{line}</p>
                ))}
            </div>
        </div>
    )
}