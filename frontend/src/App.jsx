import { Link } from 'react-router-dom'
import Home from './Component/Home Page/Home'
import CreateAccount from './Component/Login and Registration/CreateAccount'
import Login from './Component/Login and Registration/Login'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import PatientDashboard from './Component/Patient/PatientDashboard'
function App() {
  return (
    <>
    {/* <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
    </Routes>
    </AuthProvider> */}
    <PatientDashboard />
    </>
  )
}

export default App
