import React from 'react'
import styles from '../../Style/UploadReport.module.css'

const UploadReports = () => {
  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.title}>Medical Reports</h2>
      <form action="">
        <div className={styles.uploadArea}>
          <p><strong>Click to upload</strong> or drag and drop</p>
          <p style={{ fontSize: '12px', color: '#64748b' }}>PDF, PNG, or JPG (Max 5MB)</p>
          <label htmlFor="fileUpload" className={styles.customFileButton}>
            Choose File
          </label>
          <input type="file" accept=".pdf, .png, .jpg, .jpeg" className={styles.fileInput} />
        </div>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label>Report Type</label>
            <select className={styles.inputField}>
              <option value="HbA1c">HbA1c (3 Month Average)</option>
              <option value="Lipid Profile">Lipid Profile (Cholesterol)</option>
              <option value="KFT">Kidney Function Test (KFT)</option>
              <option value="FBS">Fasting Blood Sugar (Lab)</option>
              <option value="Prescription">Prescription/Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Date of Test</label>
            <input type="date" className={styles.inputField} />
          </div>
          <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
            <label>Doctor or Lab Notes (Optional)</label>
            <textarea
              className={styles.inputField}
              rows="3"
              placeholder="Any specific comments from the lab?"
            ></textarea>
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Upload Report
        </button>
      </form >
    </div >
  )
}

export default UploadReports
