import React from 'react';

export const AuthContext = React.createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const userInfo = localStorage.getItem('userInfo');

    const login = (userInfo) => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
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