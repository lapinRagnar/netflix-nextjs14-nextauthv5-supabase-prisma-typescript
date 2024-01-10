
import { currentUser } from '@/lib/auth'
import { auth } from "@/auth"
import { logout } from "@/actions/logout"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

const HomePage = async () => {

  const user = await currentUser()
  const session = await auth()

  if (!session) {
    return redirect('/login')
  }

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-normal gap-5 p-24">
      bonjour de home
      <div>
        <Button>test</Button>
      </div>

      <div>
        {user?.email}
      </div>

      {user?.email && (

        <form action={async () => {
          "use server"
          await logout()
        }}>
        <button>Sign out</button>
        </form>

      )}


    </main>

  )
}

export default HomePage