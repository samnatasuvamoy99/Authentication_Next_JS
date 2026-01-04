import Link from "next/link"

export default function Home() {
  return (
    <div className="h-scree w-screen bg-white flex items-center justify-center ">

      <div className=" h-screen w-[450px] shadow-2xl  border-amber-300 text-2xl font-semibold text-black flex items-center justify-center  ">
        This is the simple Todo application
      </div>

      <div className=" gap-2 flex items-center justify-center  ">
          <Link href="auth//signin">
             <button className=" text-2xl w-24 text-white bg-black font-semibold rounded-xl   border-2 p-3 pr-4 shadow-2xl">
                Signin 
             </button>
          </Link>

           <Link href="auth/signup">
             <button className=" text-2xl text-white bg-black font-semibold rounded-xl w-24  border-2 p-3  shadow-2xl">
                Signup 
             </button>
          </Link>
      </div>

    </div>


  );
}
