
import { currentUser } from '@/lib/auth'
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import MovieVideo from '@/components/MovieVideo'
import RecentlyAdded from '@/components/RecentlyAdded'

const HomePage = async () => {

  const user = await currentUser()
  const session = await auth()

  if (!session) {
    return redirect('/login')
  }

  return (
    
    <main className="p-10 lg:p-0">

      <MovieVideo />
      <h1 className='text-3xl font-bold'>Recently added</h1>
      <RecentlyAdded />

      <div className='h-[150px] '>a</div>

    </main>

  )
}

export default HomePage