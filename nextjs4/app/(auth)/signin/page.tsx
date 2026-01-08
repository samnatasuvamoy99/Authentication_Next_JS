"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signin() {
  const [clicked, Setclicked] = useState<boolean>(false);

  const router = useRouter();

  return <div className="h-screen w-screen bg-white justify-center flex ">
    <div className="flex justify-center flex-col shadow-2xl mt-18 ml-3 w-80 border-2 border-white rounded-lg h-96 ">
      <div className="px-10 justify-center">
        <div className="text-3xl subpixel-antialiased font-mono text-black">
          Signin Now
        </div>
      </div>
      <div className="pt-2 ml-6">
        <LabelledInput label="Username" placeholder="Enter your username" />
        <LabelledInput label="Password" placeholder="Enter your password" />

        <button className={` text-2xl w-auto  shadow-xl  ${clicked ? "bg-blue-500" : "bg-black"} font-bold border-2 p-1  ml-20 mt-6 rounded-xl`}
          onClick={() => {
            Setclicked(!clicked)

            setTimeout(() => {
              router.push("/"); // waiting the users 5 sec
            }, 1000);
          }}>
          submit
        </button>

      </div>
    </div>
  </div>

}



interface LabelledInput {
  label: string,
  placeholder: string,
  type?: string

}

function LabelledInput({ label, placeholder, type }: LabelledInput) {
  return <div>
    <label className="block md-2 text-black font-semibold pt-4 ">{label}</label>
    <input type={type || "text"} id="first-name" className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm shadow rounded-lg focus:outline-gray-900 w-64 p-2.5"
      placeholder={placeholder} required />
  </div>

}
