import { auth } from "@/auth";
import { db } from "@/lib/db";

const getData = async (category: string, userId: string) => {

  switch (category) {

    case "shows": {
      const data = await db.movie.findMany({
        where: {
          category: "show"
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId
            }
          }
        }
      })

      return data
    }

    case "movies": {
      
      const data = await db.movie.findMany({
        where: {
          category: "movie"
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId
            }
          }
        }
      })

      return data

    }

    case "recently" : {

      const data = await db.movie.findMany({
        where: {
          category: "recent"
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          WatchLists: {
            where: {
              userId: userId
            }
          }
        }
      })

      return data


    }
      
      
  
    default: {
      throw new Error('Invalid category')
    }
      
  } 
}

const CategoryPage = async ({ params }: { params: { genre: string }}) => {

  const session = await auth()

  console.log('params', {params})
  

  const data = await getData(params.genre, session?.user.id as string)


  return (
    <div>
      { data && data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default CategoryPage