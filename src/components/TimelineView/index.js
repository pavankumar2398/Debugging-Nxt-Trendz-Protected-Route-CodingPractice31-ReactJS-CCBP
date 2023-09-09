// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timelineView-container">
      <h1 className="heading">
        MY JOURNEY OF <br /> <span className="sub-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard data={each} />
            }
            return <ProjectTimelineCard data={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
