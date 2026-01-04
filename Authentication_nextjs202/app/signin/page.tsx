"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useRef } from 'react'
import { forwardRef } from "react"
import axios from "axios"

export default function Signin() {
  const [clicked, Setclicked] = useState<boolean>(false);
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function HandelSubmit() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;


    if (!username || !password) {
      alert("Enter your password and userName !!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/signin", {
        username,
        password
      })

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Token stored:", res.data.token);
        alert("Signin successfully completed Baby!! ");

      } else {
        alert("Token not received from server");
        return;
      }
    } catch (error) {
      console.log("error is ", error);
      alert("Sign in failed");
      return;
    }
  }

  return <div className="h-screen w-screen bg-white justify-center flex ">
    <div className="flex justify-center flex-col shadow-2xl mt-18 ml-3 w-80 border-2 border-white rounded-lg h-96 ">
      <div className="px-10 justify-center">
        <div className="text-3xl subpixel-antialiased font-mono text-black">
          Signin_Now
        </div>
      </div>
      <div className="pt-2 ml-6">
        <LabelledInput ref={usernameRef} label="Username" placeholder="Enter your username" />
        <LabelledInput ref={passwordRef} label="Password" placeholder="Enter your password" />

        <button className={` text-2xl w-auto  shadow-xl  ${clicked ? "bg-blue-500" : "bg-black"} font-bold border-2 p-1  ml-20 mt-6 rounded-xl`}
          onClick={
            () => {
              Setclicked(!clicked)
              HandelSubmit()
              // setTimeout(() => {
              //   router.push("/"); // waiting the users 5 sec
              // }, 1000);
            }}>
          submit
        </button>

      </div>
    </div>
  </div>

}



interface LabelledInputprops {
  label: string,
  placeholder: string,
  type?: string,

}


// forwardRef<RefType, PropsType>  // here we are declear firstly types that we are use into the export function so do not Redeclear in it s types remember
const LabelledInput = forwardRef<HTMLInputElement, LabelledInputprops>(
  function LabelledInput({ label, placeholder, type }, ref) {
    return <div>
      <label className="block md-2 text-black font-semibold pt-4 ">{label}</label>
      <input ref={ref} type={type || "text"} id="first-name" className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm shadow rounded-lg focus:outline-gray-900 w-64 p-2.5"
        placeholder={placeholder} required />
    </div>

  })