'use client'

import { Heart, PlayCircle } from "lucide-react"
import { Button } from "./ui/button"
import PlayVideoModal from "@/components/PlayVideoModal"
import { useState } from "react"

interface iAppProps {
  title: string
  overview: string
  movieId: number
  watchList: boolean
  watchListId: string
  youtubeUrl: string
  year: number
  age: number
  time: number
}


const MovieCard = ({movieId, watchList, watchListId, youtubeUrl, title, overview, year, age, time}: iAppProps) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="w-16 h-16 text-gray-100" />  
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form >
            <Button variant={'outline'} size="icon">
              <Heart className="w-5 h-5 text-red-500" />
            </Button>
          </form>
        ): (
          <form >
            <Button variant={'outline'} size="icon">
              <Heart className="w-5 h-5 " />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p>
          <p className="font-normal text-sm">{time}h</p>
          <p className="line-clamp-1 text-sm text-gray-300 font-light">{overview}</p>
        </div>
      </div>

      <PlayVideoModal 
        title={title} 
        overview={overview} 
        youtubeUrl={youtubeUrl} 
        state={open} 
        changeState={setOpen} 
        key={movieId}
        release={year}
        age={age}
        duration={time}
      />

    </>
  )
}

export default MovieCard