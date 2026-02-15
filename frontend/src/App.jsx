import { Link } from 'react-router-dom'
import Home from './Component/Home Page/Home'
import CreateAccount from './Component/Login and Registration/CreateAccount'
import Login from './Component/Login and Registration/Login'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import PatientDashboard from './Component/Patient/PatientDashboard'
import OneTimeInfoForm from './Component/Patient/OneTimeInfoForm'


function App() {
  return (
    <>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/onetimeinfoform" element={<OneTimeInfoForm />} />
    </Routes>
    </AuthProvider>
    {/* <PatientDashboard />
    <OneTimeInfoForm /> */}
    </>
  )
}

export default App
