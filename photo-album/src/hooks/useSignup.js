import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useSignup = () => {
    const navigate = useNavigate();
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //signup user
            const res = await createUserWithEmailAndPassword(projectAuth, email, password).catch(
                (err) => console.log(err)
              );

            if (!res) {
                throw new Error('Could not complete signup')
            }
            //add display name to user
            await updateProfile(projectAuth.currentUser, { displayName: displayName }).catch(
                (err) => console.log(err)
              );
            //dispatch login action
            dispatch({ type: "LOGIN", payload: res.user })
            navigate('/home');
            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }
        catch (err) {
            //update state
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}