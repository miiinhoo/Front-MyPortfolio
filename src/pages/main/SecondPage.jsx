import { useState } from "react";
import { Skills } from "../../arrays/SkillArrays";
import SkillComponent from "../../components/SkillComponent";

export default function SecondPage(){
    const [ selected, setSelect ] = useState(null);

    

    return(
        <section>
            <div className="page-inner">
                <h2>SKILL</h2>
                <div className="skill-wrapper">
                    {Skills.map((li,inx) => (
                        <>
                            <p className="skill-title">
                                {li.category}
                            </p>
                            <div key={inx} className="skill-content">
                                {li.items.map((v,inx) => (
                                    <div key={inx} onClick={() => setSelect(v)}>
                                        <img className="skills" src={v.img} alt="skill"/>
                                        <p>{v.label}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
                <div className="cando">
                    <SkillComponent data = { selected }/>
                </div>
            </div>
        </section>
        
    )
}