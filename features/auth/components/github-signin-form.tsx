"use client"

import { Button } from "@/components/ui/button";
import {Spinner} from '@/components/ui/spinner'
import {useFormStatus} from 'react-dom'
import {signInWithGithub} from '../actions/index'


function GitHubIcon(){
   return (
<svg
      viewBox="0 0 24 24"
      className="mr-2 h-5 w-5"
      fill="currentColor"
    >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.41 2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
     </svg>
   )

}


function SubmitButton(){
const {pending}= useFormStatus()

let buttonLable ='contine with Github'
let buttonIcon=<GitHubIcon/>
if(pending){
  buttonLable="redirecting to Github"
  buttonIcon =<Spinner className="size-4"/>
}

return (
<Button
type="submit"
className={"w-full"}
size={"lg"}
disabled={pending}
>
  {buttonIcon}
  {buttonLable}

</Button>

)
}

type GithubSignInFormProps ={
  callbackUrl ?:string
}

export function GithubSignInForm({callbackUrl}:GithubSignInFormProps){

  return (
    <form action={signInWithGithub} className='w-full'>
{callbackUrl?(<input type='hidden' name="callbackUrl" value ={callbackUrl} />):null}
<SubmitButton/>
    </form>
  )
} 