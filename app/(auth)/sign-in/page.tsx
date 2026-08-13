
import React from 'react'
import  Image from 'next/image'
import type{Metadata} from 'next'
import  {
  Card,CardContent,CardDescription ,CardHeader,CardTitle
} from '@/components/ui/card'
import  {
 Field,FieldDescription , FieldGroup,FieldSet
} from '@/components/ui/field'

import {GithubSignInForm} from '@/features/auth/components/github-signin-form'

// its adds meta data to url page         

export const metadata: Metadata={
  title:"Sign in",
  description:'Sign in withh github account'
}


type SignInPagePropes ={
searchParams :Promise<{callbackUrl : string}> ;
}

export default async  function SignIn({searchParams}:SignInPagePropes) {
  const {callbackUrl} =  await searchParams
  return (
         <div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Sign in to your account
          </CardTitle>

          <CardDescription>
            Continue with GitHub to sign in securely
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FieldGroup>
            <FieldSet>
              <Field>
              <GithubSignInForm callbackUrl={callbackUrl} />
              </Field>
            </FieldSet>

            <FieldDescription className="text-center">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </FieldDescription>
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  )
}
    