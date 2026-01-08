import { ReactNode } from "react";

export default function ({ children }: {
  children: ReactNode
}) {
  return <div>
    <div className="h-20 bg-cyan-400 justify-center flex opacity shadow-2xl border-b-fuchsia-300 border-2">
      This is my  Header section my auth folder
    </div>

    {children}

    <div className="w-screen ">
      This is my Footer section  of my Footer section
    </div>

  </div>

}

