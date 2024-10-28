import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user information
    const navigate = useNavigate();

    const logout = () => {
        setUser(null); // Reset user state
        // Optionally, remove token from local storage if you store it there
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
