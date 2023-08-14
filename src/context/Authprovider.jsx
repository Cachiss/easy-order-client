import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(null);
    const logout = () => {
        localStorage.removeItem('isLogged');
        setIsLogged(false);
        }
    const login = () => {
        localStorage.setItem('isLogged', true);
        setIsLogged(true);

    }
    useEffect(() => {
        if (localStorage.getItem('isLogged')) {
            if(!isLogged) setIsLogged(true);
        } else {
            setIsLogged(false);
        }
      }, []);
    

    return (
        <AuthContext.Provider value={{isLogged, setIsLogged, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;