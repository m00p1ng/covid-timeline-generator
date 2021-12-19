import { Patient } from "../../interfaces/Patient";
import { TimelineEntry } from "../../interfaces/TimelineEntry";
import TimelineDetail from "../TimelineDetail/TimelineDetail";
import TimelineEntryForm from "../TimelineEntryForm/TimelineEntryForm";

interface TimelineProps {
  patient: Patient;
  timelineEntries: TimelineEntry[];
  deleteTimelineEntryByPatient: any;
  getAllTimelineEntriesByPatient: any;
}

const Timeline = ({
  patient,
  timelineEntries,
  deleteTimelineEntryByPatient,
  getAllTimelineEntriesByPatient,
}: TimelineProps) => {
  return (
    <div>
      <h3 className="primary-text">Timeline</h3>

      <div className="grid grid-cols-12 gap-8 mt-3">
        <div className="col-span-8">
          <TimelineDetail
            patient={patient}
            timelineEntries={timelineEntries}
            deleteTimelineEntryByPatient={deleteTimelineEntryByPatient}
            getAllTimelineEntriesByPatient={getAllTimelineEntriesByPatient}
          />
        </div>
        <div className="col-span-4">
          <TimelineEntryForm />
        </div>
      </div>
    </div>
  )
}

export default Timeline;