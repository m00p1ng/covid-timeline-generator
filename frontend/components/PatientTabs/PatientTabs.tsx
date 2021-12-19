import { Patient } from '../../interfaces/Patient';

interface PatientTabItemProps {
  patient: Patient;
  selected: boolean;
  setSelectedTab: (tab: string | number) => void;
}

interface PatientTabsProps {
  patients: Patient[];
  selectedId: string | number;
  setSelectedTab: (tab: string | number) => void;
}

const PatientTabItem = ({ patient, selected, setSelectedTab }: PatientTabItemProps) => (
  <div>
    {patient.id}
  </div>
)

const PatientTabs = ({ patients, selectedId, setSelectedTab }: PatientTabsProps) => {
  return (
    <div>
      {patients.map((patient) => (
        <PatientTabItem
          key={patient.id}
          selected={selectedId === patient.id}
          setSelectedTab={setSelectedTab}
          patient={patient}
        />
      ))}
    </div>
  )
}

export default PatientTabs;