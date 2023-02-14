'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return <div>
    <Image 
      src="https://links.p"
      width={300}
      height={300}
      alt="logo"
    />
    <button>Sign In to use Talkie</button>
  </div>
}

export default Login
