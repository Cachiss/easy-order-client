import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(null);
    useEffect(() => {
        if (localStorage.getItem('isLogged')) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
      }, []);
    
      const logout = () => {
        localStorage.removeItem('isLogged');
        setIsLogged(false);
        }
    return (
        <AuthContext.Provider value={{isLogged, setIsLogged, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;