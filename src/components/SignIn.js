import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const SignIn = () => {

    const { signIn } = useContext(GlobalContext)

    const handleSignIn = provider => signIn(provider)

    return (
        <>
            <button className="sign-in" onClick={() => handleSignIn("google")}>Sign in with Google</button>
            <button className="sign-in" onClick={() => handleSignIn("github")}>Sign in with GitHub</button>
            <button className="sign-in" onClick={() => handleSignIn("anonymous")}>Sign in Anonymous</button>
        </>
    )
}

export default SignIn
