import { Skills } from "../../arrays/SkillArrays";

export default function SecondPage(){
    return(
        <section>
            <div className="page-inner">
                <h2>SKILL</h2>
                <div className="skill-wrapper">
                    {Skills.map(li => (
                        <>
                            <p className="skill-title">
                                {li.category}
                            </p>
                            <div key={li.id} className="skill-content">
                                {li.items.map((v,inx) => (
                                    <div key={inx}>
                                        <img className="skills" src={v.img} alt="skill"/>
                                        <p>{v.label}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
                
            </div>
        </section>
        
    )
}