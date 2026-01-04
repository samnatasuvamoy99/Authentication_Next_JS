"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios";


export default function Signup() {


  const [clicked, SetClicked] = useState<boolean>(false);
  const router = useRouter();

  const [username, SetUsername] = useState<string>();
  const [password, SetPassword] = useState<string>();

  const handleSignup = async () => {
    try {
      SetClicked(true);

      await axios.post("http://localhost:3000//api/v1/signup", {
        username,
        password,
      });


      SetUsername("");
      SetPassword("");

      setTimeout(() => {



        router.push("/");
      }, 2000)

    } catch (err) {
      console.log("Signup error:", err);
      SetClicked(false);
    }
  };

  return <div className="h-screen w-screen bg-white justify-center flex ">
    <div className="flex justify-center flex-col shadow-2xl mt-18 ml-3 w-80 border-2 border-white rounded-lg h-96 ">
      <div className="px-10 justify-center">
        <div className="text-3xl subpixel-antialiased font-mono text-black">
          Signup Now
        </div>
      </div>
      <div className="pt-2 ml-6">
        <LabelledInput label="Username" placeholder="Enter your username"
          onChange={
            e => {
              SetUsername(e.target.value)

            }
          } />
        <LabelledInput label="Password" placeholder="Enter your password"
          onChange={
            e => {
              SetPassword(e.target.value)

            }} />

        <button className={` text-2xl w-auto  shadow-xl  ${clicked ? "bg-blue-500" : "bg-black"} font-bold border-2 p-1  ml-20 mt-6 rounded-xl`}
          onClick={handleSignup}>
          submit
        </button>

      </div>
    </div>
  </div>


}



interface LabelledInput {
  label: string,
  placeholder: string,
  type?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInput) {
  return <div>
    <label className="block md-2 text-black font-semibold pt-4 ">{label}</label>
    <input type={type || "text"} className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm shadow rounded-lg focus:outline-gray-900 w-64 p-2.5"
      placeholder={placeholder} required onChange={onChange} />
  </div>

}