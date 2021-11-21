import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile,getIdToken ,onAuthStateChanged, GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../component/Login/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser =(email,password,name,location,history)=>{
        console.log(name);
        //setIsLoading(true);
        const destination = location?.state?.from || '/';
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName:name};
            setUser(newUser);
            history.push(destination);
            savedUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[auth])

    const savedUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://floating-scrubland-06607.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()
    }

    //google login
    const signInWithGoogle =( location, history)=>{
        setIsLoading(true);
        const destination = location?.state?.from || '/';
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                savedUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                history.push(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
        fetch(`https://floating-scrubland-06607.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=> setAdmin(data.admin));
    },[user.email]);

    const logOut = () =>{
        setIsLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally(()=> setIsLoading(false));
    }
    return{
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;