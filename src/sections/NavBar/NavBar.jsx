import styles from './NavBarStyles.module.css';
import NavElement from '../../common/NavElement';

export default function NavBar(props) {
    //const { element } = props
    return (
    
        <div className={styles.navbar}>
            <div id={styles.marker}>
                <p></p>
                                
            </div>
            <ul className={styles.navbarElements}>
                <NavElement
                    element="About me"
                    index="1"
                />
                <NavElement
                    element="Projects"
                    index="2"
                />
                <NavElement
                    element="Skills"
                    index="3"
                />
                <NavElement
                    element="Contact"
                    index="4"
                />
                
            </ul>
        </div>
    )
}