import TimelineDetail from "../TimelineDetail/TimelineDetail";
import TimelineEntryForm from "../TimelineEntryForm/TimelineEntryForm";

const Timeline = () => {
  return (
    <div>
      <h3 className="primary-text">Timeline</h3>

      <div className="grid grid-cols-12 gap-8 mt-3">
        <div className="col-span-8">
          <TimelineDetail />
        </div>
        <div className="col-span-4">
          <TimelineEntryForm />
        </div>
      </div>
    </div>
  )
}

export default Timeline;