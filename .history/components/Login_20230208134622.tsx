'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return <div>
    <Image 
      src="https://www.clipartmax.com/png/middle/453-4539175_service-chatbot-campfire-comes-to-san-francisco-june-chat-bot-salesforce.png"
      width={300}
      height={300}
      alt="logo"
    />
    <button>Sign In to use Talkie</button>
  </div>
}

export default Login
