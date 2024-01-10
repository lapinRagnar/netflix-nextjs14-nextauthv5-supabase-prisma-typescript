import { db } from "@/lib/db"
import Image from "next/image"
import MovieCard from "@/components/MovieCard"


const getData = async () => {
  const data = await db.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      release: true,
      age: true,
      duration: true

    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 4
  })

  return data
}

const RecentlyAdded = async () => {
  const data = await getData()

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data?.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image 
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">

            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">

              <Image 
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard 
                movieId={movie.id} 
                watchList={movie.WatchLists.length > 0 ? true : false} 
                watchListId={movie.WatchLists[0]?.id} 
                youtubeUrl={movie.youtubeString} 
                title={movie.title} 
                overview={movie.overview} 
                key={movie.id}
                age={movie.age}
                time={movie.duration}
                year={movie.release}
              />

            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

export default RecentlyAdded