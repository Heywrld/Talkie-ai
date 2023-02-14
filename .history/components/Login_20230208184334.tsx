'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
  <div className=" bg-[#EBC7E6] h-screen flex flex-col items-center justify-center text-center">
    <Image
    className=" ani" 
      src="https://o.remove.bg/downloads/63d1be7e-2e97-492b-9d02-14f34d109245/vector-funny-cartoon-purple-friendly-robot-character-isolated-on-white-background-kids-3d-robot-toy-image_csp54174978-removebg-preview.png"
      width={300}
      height={300}
      alt="logo"
    />
    <button onClick={() => signIn("google") } 
    className=" text-white font-bold text-3xl animate-bounce">Sign In to use Talkie</button>
  </div>
  );
}

export default Login
