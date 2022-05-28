import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
export default function Social() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
    if (loading) {
        return 'Please Wait'
    }
    return (
        <>
            <div className="divider">OR</div>
            <div className="text-center">
                <div onClick={() => signInWithGoogle()} className="border-2 cursor-pointer border-gray-300 rounded-full py-2 px-2 mx-auto flex items-center">
                    <img className="h-12" src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%20573.png" alt="" />
                    <p className="text-center block flex-grow">Continue with Google</p>
                </div>
                {error && <p className="text-error my-3">{error.message}</p>}
            </div>
        </>
    )
}
