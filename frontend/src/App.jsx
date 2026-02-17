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


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/onetimeinfoform" element={<OneTimeInfoForm />} />
          </Route>
        </Routes>
      </AuthProvider>

    </>
  )
}

export default App
