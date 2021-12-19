const PatientInfoForm = () => (
  <div>
    <h3 className="primary-text">Patient Information</h3>
    <div className="patient-info-container mt-3">
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="form-group col-span-3">
          <label>Gender</label>
          <select>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        <div className="form-group col-span-3">
          <label>Age</label>
          <input type="number" placeholder="Your age" />
        </div>
        <div className="form-group col-span-6">
          <label>Occupation</label>
          <input type="text" placeholder="Your Occupation" />
        </div>
      </div>
      <div className="text-right">
        <button className="button primary-button">+ Add Patient</button>
      </div>
    </div>
  </div>
)

export default PatientInfoForm;