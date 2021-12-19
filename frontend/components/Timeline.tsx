import { AxiosRequestConfig, AxiosPromise } from 'axios'

import { Patient } from "../interfaces/Patient";
import { TimelineEntry } from "../interfaces/TimelineEntry";
import TimelineDetail from "./TimelineDetail";
import TimelineEntryForm from "./TimelineEntryForm";

interface TimelineProps {
  patient: Patient;
  timelineEntries: TimelineEntry[];
  deleteTimelineEntryByPatient: (config: AxiosRequestConfig<any>) => AxiosPromise<any>;
  getAllTimelineEntriesByPatient: (config: AxiosRequestConfig<any>) => AxiosPromise<TimelineEntry[]>;
  deletePatient: (config: AxiosRequestConfig<any>) => AxiosPromise<any>;
  getAllPatients: () => AxiosPromise<Patient[]>;
  createTimelineEntryByPatient: (config: AxiosRequestConfig<any>) => AxiosPromise<TimelineEntry>;
  setSelectedTab: any;
}

const Timeline = ({
  patient,
  timelineEntries,
  deleteTimelineEntryByPatient,
  getAllTimelineEntriesByPatient,
  deletePatient,
  getAllPatients,
  createTimelineEntryByPatient,
  setSelectedTab,
}: TimelineProps) => {
  const onDeletePatient = async () => {
    await deletePatient({
      url: `/patients/${patient.id}`
    });
    setSelectedTab(null);
    await getAllPatients();
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="primary-text">Timeline</h3>
        <button
          className="button danger-button"
          onClick={onDeletePatient}
        >
          Remove Patient
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-3">
        <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
          <TimelineDetail
            patient={patient}
            timelineEntries={timelineEntries}
            deleteTimelineEntryByPatient={deleteTimelineEntryByPatient}
            getAllTimelineEntriesByPatient={getAllTimelineEntriesByPatient}
          />
        </div>
        <div className="lg:col-span-1 md:col-span-1 sm:col-span-1">
          <TimelineEntryForm
            patientId={patient.id}
            createTimelineEntryByPatient={createTimelineEntryByPatient}
            getAllTimelineEntriesByPatient={getAllTimelineEntriesByPatient}
          />
        </div>
      </div>
    </div>
  )
}

export default Timeline;