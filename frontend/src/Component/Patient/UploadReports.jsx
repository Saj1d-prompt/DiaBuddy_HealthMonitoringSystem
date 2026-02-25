import React from 'react'
import styles from '../../Style/UploadReport.module.css'

const UploadReports = () => {
  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.title}>Medical Reports</h2>
      <p>Upload your Medical Reports Here</p>

      <form action="">
        <div>
          <p><strong>Click to upload</strong> or drag and drop</p>
          <p>PDF, PNG, or JPG (Max 5MB)</p>
          <input type="file" accept=".pdf, .png, .jpg, .jpeg" />
          <button type="submit">Upload</button>
          
        </div>
      </form>
    </div>
  )
}

export default UploadReports
