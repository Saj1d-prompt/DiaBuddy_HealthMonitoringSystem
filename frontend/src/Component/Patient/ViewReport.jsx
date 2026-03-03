import React, { useEffect, useState } from 'react'
import styles from '../../Style/ViewReports.module.css';

const ViewReport = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchReports = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/getReport`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            const result = await response.json();
            if (result.status === 200) {
                setReports(result.data);
                console.log(result.data);
            }
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchReports();
    }, []);
    if (loading) {
        return <div className={styles.emptyState}>Loading...</div>;
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>View Medical Reports History</h1>

            {reports.length === 0 ? (
                <div className={styles.emptyState}>No reports available.</div>
            ) : (
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
                        {reports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.reportDate}</td>
                                <td><span className={styles.reportType}>{report.reportType}</span></td>
                                <td>{report.labName}</td>
                                <td>{report.comments || '-'}</td>
                                <td><a className={styles.viewReportLink}>View Report</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    )
}

export default ViewReport
