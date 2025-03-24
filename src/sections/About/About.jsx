import styles from './AboutStyles.module.css';
import avatar from '../../assets/avatarPorfile.png';

export default function About() {
    return (
        <div className={styles.aboutContainer} data-index="1">
            <div className={styles.aboutAvatar}>
                <img src={avatar} className={styles.aboutImage} alt="porfile-image" />
            </div>

            <div className={styles.aboutInfo}>
                <h1>
                Sebastian
                <br />
                Antezana
                </h1>
                <h2>Jr Web Developer</h2>
                <span>
                
                <a href="https://github.com/l-dstructordqks" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/sebastian-antezana-2b74ba336/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                </a>
                </span>
                <p className={styles.description}>
                I learn quickly, adapt to new challenges, and strive to add value from day one. Eager to join a dynamic team and continue growing.
                </p>
                <a href="/CV.pdf" download>
                <button className="hover">Resume</button>
                </a>
            </div>
            

            
        </div>
    )
    /*
    <section id="hero" className={styles.container}>
                <div className={styles.colorModeContainer}>
                    <img
                    //src={heroImg}
                    className={styles.hero}
                    alt="Profile picture of Harris Johnsen"
                    />
                    <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                    />
                </div>
                <div className={styles.info}>
                    <h1>
                    Harris
                    <br />
                    Johnsen
                    </h1>
                    <h2>Frontend Developer</h2>
                    <span>
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    </span>
                    <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial
                    businesses.
                    </p>
                    <a href={CV} download>
                    <button className="hover">Resume</button>
                    </a>
                </div>
                </section>
    */
}
