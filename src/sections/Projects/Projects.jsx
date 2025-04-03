import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ChatApp from '../../assets/ChatApp.png'
import ToDo from '../../assets/ToDo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ChatApp}
          link="https://github.com/RITISHM03/Chat_App"
          h3="Chatx"
          p="Chat App"
        />
        <ProjectCard
          src={ToDo}
          link="https://github.com/RITISHM03/Todo_list"
          h3="Taskerr"
          p="ToDo List"
        />
       
      </div>
    </section>
  );
}

export default Projects;

