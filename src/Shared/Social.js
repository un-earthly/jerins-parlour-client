import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
export default function Social() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <>
            <div class="divider">OR</div>
            <div class="text-center">
                <div onClick={() => signInWithGoogle()} class="border-2 cursor-pointer border-gray-300 rounded-full py-2 px-2 mx-auto flex items-center">
                    <img class="h-12" src="https://raw.githubusercontent.com/ProgrammingHero1/jerins-parlour/main/Image_Icon/Icon/Group%20573.png" alt="" />
                    <p className="text-center block flex-grow">Continue with Google</p>
                </div>
                {error && <p class="text-error my-3">{error.message}</p>}
            </div>
        </>
    )
}
