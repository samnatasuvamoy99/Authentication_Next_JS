// "use client"

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return <SessionProvider>
//     <Homepage />
//   </SessionProvider>
// }


// // always rap inside SessionProvider this HomePage 

// function Homepage() {
//   const session = useSession();// for check can  user login or not ?? 
    
//   return (
//        <div className=" w-24 h-12 bg-white text-2xl text-black shadow-2xs border-2">
//             {session.status === "authenticated" && <button onClick={()=> signOut()}>
//                  LogOut
//                </button>}

//                 {session.status === "unauthenticated" && <button onClick={()=> signIn()}>
//                  Sign In
//                </button>}
//        </div>
//   );
  
// }   .... this is the client side rendering code now move into the  server side rendering


import { getServerSession} from "next-auth";

export default async function Home(){
   const session = await getServerSession();
   return (
    <div>
       {JSON.stringify(session)}
    </div>
   );
}
