const PatientInfo = () => (
  <div>
    <h3 className="primary-text">Patient Information</h3>
    <div className="patient-info-container mt-3">
      <div>
        <label>Gender</label>
        <select>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        <label>Age</label>
        <input type="number" placeholder="Your age" />
        <label>Occupation</label>
        <input type="text" placeholder="Your Occupation" />
      </div>
      <div className="text-right">
        <button className="button primary-button">+ Add Patient</button>
      </div>
    </div>
  </div>
)

export default PatientInfo