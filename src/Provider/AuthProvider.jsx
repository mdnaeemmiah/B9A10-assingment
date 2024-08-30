import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [users,setUsers] = useState();
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubsCribe = onAuthStateChanged(auth,currentUser=>{
            setUsers(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubsCribe();
        }
    },[])


    const authInfo ={
        users,
        loading,
        createUser,
        loginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;