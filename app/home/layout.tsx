import { auth } from "@/auth"
import Navbar from "@/components/Navbar"
import { redirect } from "next/navigation"


const HomeLayout = async ({children}: {children: React.ReactNode}) => {

  const session = await auth()


  if (!session) {
    return redirect('/login')
  }

  return (
    <>
      <Navbar />
      
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}

export default HomeLayout