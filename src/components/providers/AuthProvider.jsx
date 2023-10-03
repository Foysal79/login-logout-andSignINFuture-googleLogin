import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    ////  createUser   ( register part )
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    //// create login user 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }




    //// Sign Out

     const logOut = () => {
        setLoading(true);
        signOut(auth);
     }


     /// google provider set 
     const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
     }


     ////   kono user thakle thake ovsera rakbe
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, currentUser => {
            
                setUser(currentUser);
                console.log('observing current users inside useEffect of authProvider', currentUser);
                setLoading(false);
        })
        return () =>{
            unsubscribed(); 
        } 
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


///// prop types
export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}

/***
 * 1. create context and export
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file 
 * 4. access children in the AuthProvider Component as children and use it in the middle of the provider.
 * 5. 
 * 
 */

