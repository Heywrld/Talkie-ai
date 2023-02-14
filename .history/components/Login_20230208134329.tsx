'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return <div>
    <Image 
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Flogo-design%2Fcontests%2Flogo-chat-bot-770778&psig=AOvVaw0G402iO_jejxm3wk62VxL0&ust=1675946581174000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjLltf5hf0CFQAAAAAdAAAAABAE"
      width={300}
      height={300}
      alt="logo"
    />
    <button>Sign In to use Talkie</button>
  </div>
}

export default Login
