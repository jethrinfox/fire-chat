import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const SignOut = () => {

    const { signOut, user } = useContext(GlobalContext)

    const handleSignOut = () => signOut()

    if (user) {
        return <button onClick={() => handleSignOut()}>Sign Out</button>
    }
    return null
}

export default SignOut
