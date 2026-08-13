"use client"

import {ModeToggle} from '@/components/ui/mode-toggle'
import {authClient} from '@/lib/auth-client'
import {UserMenuWithSession} from "@/features/auth/components/user-menu"
export default function Home() {

  const {data}=authClient.useSession()
  console.log(data)

  const user = {
  name: "Nitesh",
  email: "nitesh@gmail.com",
  image: "https://example.com/profile.jpg",
};


  return(
   <div className="">
      <UserMenuWithSession variant="compact"/>

    </div>
);
}
