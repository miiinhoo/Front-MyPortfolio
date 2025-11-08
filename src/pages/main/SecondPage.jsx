import { Skill } from "../../arrays/SkillArrays";

export default function SecondPage(){
    return(
        <section>
            <div className="page-inner">
                <h2>SKILL</h2>
                <div className="skill-wrapper">
                    {Skill.map(li => (
                        <>
                            <p className="skill-title">
                                {li.text}
                            </p>
                            <div key={li.id} className="skill-content">
                                
                                {li.option.map((v,inx) => (<p key={inx} className="skills">{v}</p>))}
                            </div>
                        </>
                    ))}
                </div>
                
            </div>
        </section>
        
    )
}