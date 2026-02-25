import React from 'react'
import styles from '../../Style/UploadReport.module.css'

const UploadReports = () => {
  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.title}>Medical Reports</h2>
      <p>Upload your Medical Reports Here</p>

      <form action="">
        <div className={styles.uploadArea}>
          <p><strong>Click to upload</strong> or drag and drop</p>
          <p style={{ fontSize: '12px', color: '#64748b' }}>PDF, PNG, or JPG (Max 5MB)</p>
          <label htmlFor="fileUpload" className={styles.customFileButton}>
            Choose File
          </label>
          <input type="file" accept=".pdf, .png, .jpg, .jpeg" className={styles.fileInput} />
        </div>
      </form>
    </div>
  )
}

export default UploadReports
