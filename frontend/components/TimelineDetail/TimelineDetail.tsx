import _ from 'lodash'

import { Patient } from "../../interfaces/Patient";
import { TimelineEntry } from "../../interfaces/TimelineEntry";

type TimelineGroup = [string, TimelineEntry[]];

interface TimelineDateProps {
  date: string;
  timelineEntries: TimelineEntry[];
}

interface TimelineDetailProps {
  patient: Patient;
  timelineEntries: TimelineEntry[]
}

const transformTimelineEntriesToDateGroup = (timelineEntries: TimelineEntry[]): TimelineGroup[] => {
  const result = _(timelineEntries)
    .groupBy(tl => tl.timeFrom.slice(0, 10))
    .entries()
    .sort((a, b) => new Date(a[0]).valueOf() - new Date(b[0]).valueOf())
    .value()

  Object.values(result)
    .forEach(tl => {
      tl[1].sort((a, b) => new Date(a.timeFrom).valueOf() - new Date(b.timeFrom).valueOf())
    })

  return result;
}

const TimelineDate = ({ date, timelineEntries }: TimelineDateProps) => {
  return (
    <div>
      <p className="primary-text mb-4">
        {date.split('-').reverse().join('/')}
      </p>
      <div className="timeline-entries-container">
        {timelineEntries.map((timelineEntry) => (
          <div key={timelineEntry.id} className="grid grid-cols-12 gap-2 mb-3">
            <div className="col-span-3">
              <p className="primary-text">
                {timelineEntry.timeFrom.slice(11, 16)} - {timelineEntry.timeTo.slice(11, 16)}
              </p>
            </div>
            <div className="col-span-9">
              <p className="text-xl">{timelineEntry.detail}</p>
              <p className="subtitle-text">
                {_.startCase(_.toLower(timelineEntry.locationType))}
                {timelineEntry.location && ` - ${timelineEntry.location}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const TimelineDetail = ({ patient, timelineEntries }: TimelineDetailProps) => {
  const timelineGroup: TimelineGroup[] = transformTimelineEntriesToDateGroup(timelineEntries)
  return (
    <div className="timeline-detail-container">
      <div className="patient-info-container mb-8">
        <p className="dark-text">{_.startCase(_.toLower(patient.gender))}</p>
        <p className="dark-text text-2xl">{patient.age} years old</p>
        <p className="dark-text">{patient.occupation}</p>
      </div>

      {timelineGroup.map(timelineGroupDetail => (
        <TimelineDate
          key={timelineGroupDetail[0]}
          date={timelineGroupDetail[0]}
          timelineEntries={timelineGroupDetail[1]}
        />
      ))}

      {timelineGroup.length === 0 && (
        <h3 className="text-center">No entry</h3>
      )}
    </div>
  )
}

export default TimelineDetail;