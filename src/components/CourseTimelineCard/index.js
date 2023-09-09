// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  return (
    <div className="course-container">
      <div className="courseName-time-container">
        <h1 className="course-heading">{data.courseTitle}</h1>
        <div className="time-container">
          <AiFillClockCircle className="time-logo" />
          <p className="time">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="tags-container">
        {data.tagsList.map(eachItem => (
          <p className="tags">{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
