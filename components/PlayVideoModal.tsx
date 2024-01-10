import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface iAppProps {
  title: string
  overview: string
  youtubeUrl: string
  state: boolean
  changeState: any
  release: number
  age: number
  duration: number
}

const PlayVideoModal = ({title, overview, youtubeUrl, state, changeState, release, age, duration}: iAppProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
          <div className="flex gap-2 items-center">
            <p>{release}</p>
            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm bg-red-500">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} className="w-full aspect-video" />
      </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModal