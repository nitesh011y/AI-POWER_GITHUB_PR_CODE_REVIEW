"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  SIGN_IN_PATH,
  DEFAULT_AUTH_CALLBACK,
  getSafeCallbackPath,
} from "../utils/index";

export async function signInWithGithub(formData: FormData) {
  const callback = formData.get("callbackUrl");

  const redirectTo = getSafeCallbackPath(
    typeof callback === "string" ? callback : null,
  );
  
  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: redirectTo,
    },
    headers: await headers(),
  });

  if (result.url) {
    redirect(result.url);
  }
}

export async function getServerSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth(redirectTO = SIGN_IN_PATH) {
  const session = await getServerSession();
  if (!session) {
    redirect(redirectTO);
  }

  return session;
}

export async function requireUnAuth(redirectTO = DEFAULT_AUTH_CALLBACK) {
  const session = await getServerSession();
  if (session) {
    redirect(redirectTO);
  }
}


// export async function Logout() {
// const res=  await auth.api.signOut
// if(res){
//   redirect('/');
// }

// }