// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="projectTimelineCard-container">
      <img src={data.imageUrl} className="image" alt="project" />
      <div className="projectTitle-time-container">
        <h1 className="projectTitle">{data.projectTitle}</h1>
        <div className="projectTitle-container">
          <AiFillCalendar className="filler-calender" />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <a className="project-url" href={data.projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
