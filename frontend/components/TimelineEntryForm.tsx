import { useState } from 'react';

interface TimelineEntryFromProps {
  patientId: string | number;
  createTimelineEntryByPatient: any;
  getAllTimelineEntriesByPatient: any;
}

const TimelineEntryForm = ({
  patientId,
  createTimelineEntryByPatient,
  getAllTimelineEntriesByPatient,
}: TimelineEntryFromProps) => {
  const [timeFrom, setTimeFrom] = useState<string>();
  const [timeTo, setTimeTo] = useState<string>();
  const [detail, setDetail] = useState<string>();
  const [locationType, setLocationType] = useState<string>('INDOOR');
  const [location, setLocation] = useState<string>();

  const onCreateTimeEntry = async () => {
    await createTimelineEntryByPatient({
      url: `/patients/${patientId}/timeline-entries`,
      data: {
        timeFrom,
        timeTo: timeFrom?.slice(0, 11) + timeTo,
        location,
        locationType,
        detail,
      }
    })
    await getAllTimelineEntriesByPatient({
      url: `/patients/${patientId}/timeline-entries`
    })
  }

  return (
    <div className="timeline-entry-form-container">
      <div className="grid xl:grid-cols-12 gap-4 mb-6">
        <div className="form-group xl:col-span-8">
          <label>From</label>
          <input
            type="datetime-local"
            value={timeFrom}
            onChange={(event) => setTimeFrom(event.target.value)}
          />
        </div>

        <div className="form-group xl:col-span-4">
          <label>Time</label>
          <input
            type="time"
            value={timeTo}
            onChange={(event) => setTimeTo(event.target.value)}
          />
        </div>

        <div className="form-group xl:col-span-12">
          <label>Detail</label>
          <textarea
            rows={5}
            onChange={(event) => setDetail(event.target.value)}
          >
            {detail}
          </textarea>
        </div>

        <div className="form-group xl:col-span-4">
          <label>Location Type</label>
          <select
            value={locationType}
            onChange={(event) => setLocationType(event.target.value)}
          >
            <option value="INDOOR">Indoor</option>
            <option value="OUTDOOR">Outdoor</option>
            <option value="HOME">Home</option>
            <option value="TRAVELLING">Travelling</option>
          </select>
        </div>

        <div className="form-group xl:col-span-8">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          className="button primary-button"
          onClick={onCreateTimeEntry}
        >
          + Add Entry
        </button>
      </div>
    </div>
  )
}

export default TimelineEntryForm;