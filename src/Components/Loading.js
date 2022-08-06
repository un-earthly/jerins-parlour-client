import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-base-100">
            <div className="grid gap-2">
                <div className="flex items-center justify-center ">
                    <div className="w-16 h-16 border-b-2 border-accent rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-24 h-24 border-l-2 border-accent rounded-full animate-spin"></div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="w-40 h-40 border-t-4 border-b-4 border-accent rounded-full animate-spin"></div>
                </div>
            </div>

        </div>
    )
}
