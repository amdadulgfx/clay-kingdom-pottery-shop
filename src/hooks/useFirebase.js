import authInitilizer from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

authInitilizer();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState('');
    const [isAdminLoading, setIsAdminLoading] = useState(false);

    const auth = getAuth();

    //register 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email: email, displayName: name };
                // ...
                console.log(user);
                saveUser(email, name);
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setAuthError('');
                history.replace('/');
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    };

    //login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // // Signed in 
                // const user = userCredential.user;
                // // ...

                const destination = location?.state?.from || "/";
                history.replace(destination);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    //save user
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://radiant-gorge-33858.herokuapp.com/users', user)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });

    }

    //observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // setIsLoading(true)
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    //admin
    useEffect(() => {
        setIsAdminLoading(true)
        fetch(`https://radiant-gorge-33858.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setIsAdminLoading(false)
            })
    }, [user.email])

    //logout 
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        isLoading,
        admin,
        registerUser,
        loginUser,
        logOut,
        authError,
        isAdminLoading


    }
}
export default useFirebase;