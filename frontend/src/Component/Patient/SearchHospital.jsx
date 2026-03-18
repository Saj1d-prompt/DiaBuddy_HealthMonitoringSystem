import React from 'react'

const SearchHospital = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Find a Health Center</h1>
                    <div className={styles.searchBox}>
                        <select>
                            <option value="">Select Health Center Type</option>
                            <option value="hospital">Hospital</option>
                            <option value="diagnosis_center">Diagnosis Center</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchHospital
