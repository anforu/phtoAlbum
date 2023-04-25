import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();
    
    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign to user out
        try {
            await projectAuth.signOut()
            //dispatch logout action
            dispatch({ type: 'LOGOUT' })

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
            if(!error) {
                navigate('/');
            }
        }
        catch (err) {
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

    return { logout, error, isPending }
}