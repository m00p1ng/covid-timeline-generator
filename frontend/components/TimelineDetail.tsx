import _ from 'lodash'

import { Patient } from "../interfaces/Patient";
import { TimelineEntry } from "../interfaces/TimelineEntry";

type TimelineGroup = [string, TimelineEntry[]];

interface TimelineDateProps {
  date: string;
  timelineEntries: TimelineEntry[];
  deleteTimelineEntryByPatient: any;
}

interface TimelineDetailProps {
  patient: Patient;
  timelineEntries: TimelineEntry[];
  deleteTimelineEntryByPatient: any;
  getAllTimelineEntriesByPatient: any;
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

const findVisitedPlaces = (timelineEntries: TimelineEntry[]): string[] => {
  const result = _(timelineEntries)
    .map(timelineEntries => timelineEntries.location)
    .filter(location => !!location)
    .uniq()
    .sort()
    .value()

  return result;
}

const TimelineDate = ({
  date,
  timelineEntries,
  deleteTimelineEntryByPatient
}: TimelineDateProps) => {
  return (
    <div>
      <p className="primary-text text-2xl mb-3 mt-4">
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
            <div className="col-span-9 timeline-entry-container">
              <p className="text-xl">{timelineEntry.detail}</p>
              <button
                className="timeline-close-button"
                onClick={() => deleteTimelineEntryByPatient(timelineEntry.id)}
              >
                x
              </button>
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

const TimelineDetail = ({
  patient,
  timelineEntries,
  deleteTimelineEntryByPatient,
  getAllTimelineEntriesByPatient
}: TimelineDetailProps) => {
  const timelineGroup: TimelineGroup[] = transformTimelineEntriesToDateGroup(timelineEntries);
  const visitedPlaces: string[] = findVisitedPlaces(timelineEntries)

  const deleteTimelineEntryByPatientId = (patientId) => async (timelineEntryId) => {
    await deleteTimelineEntryByPatient({
      url: `/patients/${patientId}/timeline-entries/${timelineEntryId}`
    })
    await getAllTimelineEntriesByPatient({
      url: `/patients/${patientId}/timeline-entries`
    })
  }

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
          deleteTimelineEntryByPatient={deleteTimelineEntryByPatientId(patient.id)}
        />
      ))}

      {timelineGroup.length === 0 && (
        <h3 className="text-center">No entry</h3>
      )}

      {timelineGroup.length > 0 && (
        <div className="mt-12">
          <h4 className="primary-text mb-2">Visited Places</h4>
          {visitedPlaces.map((place) => (
            <span className="mr-4 text-xl">{place}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default TimelineDetail;