import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'

function Timeline() {
  return (
    <div className = "timeline">
        <div className = "timeline-left">Timeline</div>
        <div className = "timeline-right">
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline