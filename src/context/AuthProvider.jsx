import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    signInWithEmailAndPassword 
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign up with Google
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUser(null);
            setLoading(false);
        });
    };

    // User state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
