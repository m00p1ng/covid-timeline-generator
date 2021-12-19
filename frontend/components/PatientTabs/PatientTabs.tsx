import classnames from 'classnames'

import { Patient } from '../../interfaces/Patient';

interface PatientTabItemProps {
  index: number;
  patient: Patient;
  selected: boolean;
  setSelectedTab: (tab: string | number) => void;
}

interface PatientTabsProps {
  patients: Patient[];
  selectedId: string | number;
  setSelectedTab: (tab: string | number) => void;
}

const PatientTabItem = ({ index, patient, selected, setSelectedTab }: PatientTabItemProps) => (
  <div onClick={() => setSelectedTab(patient.id)} className="patient-tab-item">
    <p className={classnames({ "primary-text": selected })}>Patient</p>
    <h2 className={classnames({ "primary-text": selected })}>{index}</h2>
  </div>
)

const PatientTabs = ({ patients, selectedId, setSelectedTab }: PatientTabsProps) => {
  return (
    <div className="flex flex-row mb-6">
      {patients.map((patient, idx) => (
        <PatientTabItem
          key={patient.id}
          selected={selectedId === patient.id}
          setSelectedTab={setSelectedTab}
          index={idx + 1}
          patient={patient}
        />
      ))}
      <div onClick={() => setSelectedTab('Add')} className="patient-tab-item">
        <h1 className={classnames({ "primary-text": selectedId === 'Add' })}>
          +
        </h1>
      </div>
    </div>
  )
}

export default PatientTabs;