import Image from "next/image"
import BackgroundImage from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Image 
        src={BackgroundImage}
        alt="BackgroundImage"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image 
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />

      <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout