import styles from './SkillsStyle.module.css';

export default function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <div>
            <h1 className='elementTitle'>Skills</h1>
            <div className={styles.skillList}>
                <span>
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML</p>
                </span>
                <span>
                    <i className="fa-brands fa-square-js"></i>
                    <p>JavaScript</p>
                </span>
                <span>
                    <i className="fa-brands fa-css"></i>
                    <p>CSS</p>
                </span>
            </div>
            <hr/>
            <div className={styles.skillList}>
                
                <span>
                    <i className="fa-brands fa-sass"></i>
                    <p>Sass</p>
                </span>
                <span>
                    <i className="fa-brands fa-php"></i>
                    <p>PHP</p>
                </span>
                <span>
                    <i className="fa-solid fa-database"></i>
                    <p>SQL</p>
                </span>
            </div>
            <hr/>
            <div className={styles.skillList}>
                <span>
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                </span>
                <span>
                    <i className="fa-brands fa-node"></i>
                    <p>Node.js</p>
                </span>
                
            </div>
            </div>
        </div>
    )
}