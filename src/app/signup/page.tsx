import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignupPage = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-yellow-100">
            <AuthForm mode="signup" />
        </main>
    )
}

export default SignupPage