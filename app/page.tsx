
import { auth } from "@/auth"
import { redirect } from "next/navigation"



export default async function Home() {


  const session = await auth()

  console.log('la session', session)

  if (!session) {
    return redirect('/login')
  } else {
    redirect('/home')
  }

}
