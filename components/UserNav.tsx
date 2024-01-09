'use client'


import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { signOut } from 'next-auth/react'


const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost"
          className="relative h-10 w-10 rounded-sm"  
        >
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src="https://yozlakuqhdpubktihryx.supabase.co/storage/v1/object/public/user-image/avatar.png" />
            <AvatarFallback className="rounded-sm">
              lapinragnar
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">lapinragnar</p>
            <p className="text-xs leading-none text-muted-foreground">@lapinragnar</p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>

          Sign Out

        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav