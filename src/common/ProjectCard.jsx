import React from "react";

export default function ProjectCard(props) {
    const { linkGH, linkN, h3, p, color} = props
    return (
        
            <div className="projectCard">
                
                    <div className="projectImage hover" style={{ backgroundImage: color }}>
                        <div className="bgProjectImage">
                            <a href={linkGH} target="_blank">
                                <i class="fa-brands fa-github"></i>
                                <p>GitHub</p>
                            </a>
                            <a href={linkN} target="_blank">
                                <i class="fa-solid fa-eye"></i>
                                <p>Visit</p>
                            </a>
                        </div>
                        
                    </div>
                
                <h3>{h3}</h3>
                <p>{p}</p>
            </div>          
        
    );
}