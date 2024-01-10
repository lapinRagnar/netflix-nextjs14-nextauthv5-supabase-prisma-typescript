'use client'

import { InfoIcon, PlayCircle } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import PlayVideoModal from "./PlayVideoModal"


interface iAppProps {
  overview: string
  youtubeUrl: string
  id: number
  age: number
  title: string
  realiseDate: number
  duration: number
}


const MovieButtons = ({overview, youtubeUrl, id, age, title, realiseDate, duration}: iAppProps) => {

  const [open, setOpen] = useState(false)



  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 w-5 h-5 text-gray-800" /> Play
      </Button> 

      <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/50 hover:bg-white/30">
        <InfoIcon className="mr-2 w-5 h-5 " /> Learn more
      </Button>

      <PlayVideoModal 
        state={open}
        changeState={setOpen}
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        age={age}
        duration={duration}
        release={realiseDate}
        key={id}
      />


    </>
  )
}

export default MovieButtons