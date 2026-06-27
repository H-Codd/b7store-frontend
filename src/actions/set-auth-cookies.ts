'use server'

import { setServerAuthtoken } from "@/libs/server-cookies"

export const setAuthCookie = async (token:string) => {
    await setServerAuthtoken(token)
}