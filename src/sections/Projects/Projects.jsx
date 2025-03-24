import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

export default function Projects() {
    return (
        <div className={styles.projectContainer}>
            <h1 className='elementTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/TarawasiRestaurant'
                    linkn='https://github.com/l-dstructordqks/TarawasiRestaurant'
                    h3='Tarawasi Restaurant'
                    p='PHP, JS, Sass, SQL, reservation API, and MVC architecture'
                    color="url(/tarawasiapp.png)"
                />
                
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/nasa-react-app'
                    linkn='https://nasaapiwreact.netlify.app/'
                    h3='NasaApi App'
                    p='ReactJS, linked to nasa API'
                    color="url(/nasaapp.png)"
                />
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/reactjs-todolist'
                    linkn='https://todoslistreactjsss.netlify.app/'
                    h3='Todo App'
                    p='CRUD app with ReactJS'
                    color="url(/todoapp.png)"
                />
                
            </div>

        </div>
    )
}
