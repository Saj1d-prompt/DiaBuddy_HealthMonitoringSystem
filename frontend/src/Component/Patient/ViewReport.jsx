import React from 'react'
import styles from '../../Style/ViewReports.module.css';

const ViewReport = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>View Medical Reports History</h1>
            <div className={styles.tableContainer}>
                <table className={styles.reportTable}>
                    <thead>
                        <tr>
                            <th>Test Date</th>
                            <th>Report Type</th>
                            <th>Laboratory/Hospital</th>
                            <th>Comments</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 March 2026</td>
                            <td><span className={styles.reportType}>Fasting Blood Sugar</span></td>
                            <td>A Medical Center</td>
                            <td>Normal results</td>
                            <td><a className={styles.viewReportLink}>View Report</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewReport
