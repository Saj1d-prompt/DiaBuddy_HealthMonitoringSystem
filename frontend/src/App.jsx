import { Link } from 'react-router-dom'
import Home from './Component/Home Page/Home'
import CreateAccount from './Component/Login and Registration/CreateAccount'
import Login from './Component/Login and Registration/Login'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import PatientDashboard from './Component/Patient/PatientDashboard'
import OneTimeInfoForm from './Component/Patient/OneTimeInfoForm'
import ProtectedRoute from './Component/Common/ProtectedRoute'
import Profile from './Component/Patient/Profile'
import BloodSugarReading from './Component/Patient/BloodSugarReading'
import UploadReports from './Component/Patient/UploadReports'
import ViewReport from './Component/Patient/ViewReport'
import AdminDashboard from './Component/Admin/AdminDashboard'
import DoctorDashboard from './Component/Doctor/DoctorDashboard'
import DoctorInfoForm from './Component/Doctor/DoctorInfoForm'
import PatientList from './Component/Doctor/PatientList'
import PatientFacilities from './Component/Doctor/PatientFacilities'


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/onetimeinfoform" element={<OneTimeInfoForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bloodsugarreading" element={<BloodSugarReading />} />
            <Route path="/uploadreports" element={<UploadReports />} />
            <Route path="/viewreports" element={<ViewReport />} />
            <Route path="/doctordashboard" element={<DoctorDashboard />} />
            <Route path="/doctorinfoform" element={<DoctorInfoForm />} />
            <Route path="/patientlist" element={<PatientList />} />
            <Route path='/patientfacilities' element={<PatientFacilities />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
