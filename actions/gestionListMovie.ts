"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"




export async function addToWatchList(formData: FormData) {
  
  const session = await auth()
  const movieId = formData.get('movieId') 
  const pathName = formData.get('pathName')

  const data = await db.watchList.create({
    data: {
      userId: session?.user.id as string,
      movieId: Number(movieId),
    }
  })

  revalidatePath(pathName as string)

} 


export async function deleteFromWatchList(formData: FormData) {
  
  const session = await auth()
  const watchListId = formData.get('watchListId') 
  const pathName = formData.get('pathName')

  const data = await db.watchList.delete({
    where: {
      id: watchListId as string
    }
  })

  revalidatePath(pathName as string)

}



