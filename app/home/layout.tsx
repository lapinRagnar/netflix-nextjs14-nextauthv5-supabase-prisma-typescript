import { auth } from "@/auth"


const HomeLayout = async ({children}: {children: React.ReactNode}) => {
  const session = await auth()

  console.log('la session dans home layout', session)

  return (
    <div>HomeLayout</div>
  )
}

export default HomeLayout