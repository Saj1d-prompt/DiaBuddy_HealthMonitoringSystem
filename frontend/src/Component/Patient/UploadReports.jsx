import React, { useState } from 'react';
import styles from '../../Style/UploadReport.module.css';
import { useForm } from 'react-hook-form';

const UploadReports = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const fileSelected = watch("filePath");
  const [notification, setNotification] = useState('');

  const onSubmit = async (data) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const formData = new FormData();
    formData.append("filePath", data.filePath[0]);
    formData.append("reportType", data.reportType);
    formData.append("reportDate", data.reportDate);
    formData.append("labName", data.labName);
    formData.append("comments", data.comments);

    const res = await fetch(`${import.meta.env.VITE_API_KEY}/uploadReport`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: formData,
    });

    const result = await res.json();

    if (result.status === 200) {
      setNotification("Upload Reports data saved successfully.");
      reset();
    } else {
      setNotification("Failed to save Upload Reports data. Please try again.");
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.title}>Medical Reports</h2>
      {notification && <p className={styles.notification}>{notification}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.uploadArea}>
          <p><strong>Click to upload</strong> or drag and drop</p>
          <p style={{ fontSize: '12px', color: '#64748b' }}>PDF, PNG, or JPG (Max 5MB)</p>

          <label htmlFor="fileUpload" className={styles.customFileButton}>
            Choose File
          </label>

          <input
            type="file"
            accept=".pdf, .png, .jpg, .jpeg"
            id="fileUpload"
            {...register("filePath", { required: true })}
            className={styles.fileInput}
          />

          {fileSelected && fileSelected[0] && (
            <p className={styles.fileName}>Selected: {fileSelected[0].name}</p>
          )}
        </div>

        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label>Report Type</label>
            <select className={styles.inputField} {...register("reportType")}>
              <option value="HbA1c">HbA1c (3 Month Average)</option>
              <option value="Lipid Profile">Lipid Profile (Cholesterol)</option>
              <option value="KFT">Kidney Function Test (KFT)</option>
              <option value="FBS">Fasting Blood Sugar (Lab)</option>
              <option value="Prescription">Prescription/Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Date of Test</label>
            <input type="date" {...register("reportDate")} className={styles.inputField} />
          </div>

          <div className={styles.formGroup}>
            <label>Lab Name</label>
            <input
              type="text"
              {...register("labName")}
              className={styles.inputField}
              placeholder="Where was the test done?"
            />
          </div>

          <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
            <label>Doctor or Lab Notes (Optional)</label>
            <textarea
              className={styles.inputField}
              rows="3"
              {...register("comments")}
              placeholder="Any specific comments from the lab?"
            ></textarea>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Upload Report
        </button>
      </form>
    </div>
  );
};

export default UploadReports;