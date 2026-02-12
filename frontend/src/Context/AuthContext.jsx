import React from 'react';

const AuthContext = React.createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const userInfo = localStorage.getItem('userInfo');

    const login = (userInfo) => {
        setUser(userInfo);
    }

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}