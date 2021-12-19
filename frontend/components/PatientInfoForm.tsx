import { useState } from "react";

interface PatientInfoFormProps {
  createPatient: any;
  getAllPatients: any;
  setSelectedTab: any;
}

const PatientInfoForm = ({ createPatient, getAllPatients, setSelectedTab }: PatientInfoFormProps) => {
  const [gender, setGender] = useState<string>('MALE');
  const [age, setAge] = useState<number>();
  const [occupation, setOccupation] = useState<string>();

  const createNewPatient = async (event) => {
    event.preventDefault();
    await createPatient({
      data: {
        gender,
        age,
        occupation,
      }
    });
    await getAllPatients();
    setSelectedTab(null);
  }

  return (
    <div>
      <h3 className="primary-text">Patient Information</h3>
      <div className="patient-info-form-container mt-3">
        <div className="grid md:grid-cols-12 gap-4 mb-6">

          <div className="form-group md:col-span-3">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>

          <div className="form-group md:col-span-3">
            <label>Age</label>
            <input
              type="number"
              placeholder="Your age"
              min={1}
              max={100}
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value))}
            />
          </div>

          <div className="form-group md:col-span-6">
            <label>Occupation</label>
            <input
              type="text"
              placeholder="Your Occupation"
              value={occupation}
              onChange={(event) => setOccupation(event.target.value)}
            />
          </div>

        </div>
        <div className="text-right">
          <button
            className="button primary-button"
            onClick={createNewPatient}
          >
            + Add Patient
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientInfoForm;