const TimelineEntryForm = () => {
  return (
    <div className="timeline-entry-form-container">
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="form-group col-span-8">
          <label>From</label>
          <input type="datetime-local" />
        </div>

        <div className="form-group col-span-4">
          <label>Time</label>
          <input
            type="time"
            placeholder="Your age"
          />
        </div>

        <div className="form-group col-span-12">
          <label>Detail</label>
          <textarea rows={5} />
        </div>

        <div className="form-group col-span-4">
          <label>Location Type</label>
          <select>
            <option value="INDOOR">Indoor</option>
            <option value="OUTDOOR">Outdoor</option>
            <option value="HOME">Home</option>
            <option value="TRAVELLING">Travelling</option>
          </select>
        </div>

        <div className="form-group col-span-8">
          <label>Location</label>
          <input type="text" />
        </div>
      </div>
      <div className="text-right">
        <button
          className="button primary-button"
        >
          + Add Entry
        </button>
      </div>
    </div>
  )
}

export default TimelineEntryForm;