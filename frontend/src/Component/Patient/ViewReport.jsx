import React from 'react'
import styles from '../../Style/ViewReports.module.css';

const ViewReport = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>View Medical Reports History</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Test Date</th>
                            <th>Report Type</th>
                            <th>Laboratory/Hospital</th>
                            <th>Comments</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    )
}

export default ViewReport
