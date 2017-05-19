import React, { PropTypes } from 'react'
import Arrow from './Arrow'
import Project from './Project'
import styles from './DigitalMedia.scss'

const DigitalMedia = ({ current, direction, nextProject, previousProject, scrollTo, showDigitalMedia, setProject, projects }) => (
  <div id="DigitalMedia" className={styles.container}>
    <h2 className={showDigitalMedia ? styles.title : styles.hidden}>storytelling |</h2>
    <div className={showDigitalMedia ? styles.index : styles.hidden}>
      {projects.map(project => (
        <span
          key={project.id}
          className={current === project.id ? styles.activeIndexItem : styles.indexItem}
          onClick={() => setProject(project)}
        >
          {project.title}
        </span>
      ))}
    </div>
    <div className={showDigitalMedia ? styles.leftArrowContainer : styles.hidden}>
      <div className={styles.leftArrow} onClick={previousProject}>
        {'<'}
      </div>
    </div>
    <div className={styles.slideshow}>
      <div className={showDigitalMedia ? styles.projects : styles.hidden}>
        {projects.map(project => (
          <Project
            key={project.id}
            current={current}
            direction={direction}
            {...project}
          />
        ))}
      </div>
    </div>
    <div className={showDigitalMedia ? styles.rightArrowContainer : styles.hidden}>
      <div className={styles.rightArrow} onClick={nextProject}>
        {'>'}
      </div>
    </div>
    <div className={showDigitalMedia ? styles.downArrowContainer : styles.hidden}>
      <Arrow scrollTo={() => scrollTo('Connect')} />
    </div>
  </div>
)

DigitalMedia.propTypes = {
  current: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
  setProject: PropTypes.func.isRequired,
  showDigitalMedia: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.shape({
        production: PropTypes.string.isRquired,
        repository: PropTypes.string,
      }).isRequired,
      summary: PropTypes.string.isReuquired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default DigitalMedia