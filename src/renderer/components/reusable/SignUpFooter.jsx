import React from 'react'
import { Link } from 'react-router-dom';

const SignUpFooter = () => {
  return (
    <div className='mt-6'>
        <p className="text-sm text-center text-gray-400">
            <span>By signing up to create an account I accept</span>
            <br />
            Company’s Terms of Use and Privacy Policy
          </p>

          <p className="text-center text-sm mt-4 font-semibold">
          Already have an account?{' '}
          <Link to="/" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
    </div>
  )
}

export default SignUpFooter