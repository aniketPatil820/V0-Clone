// @ts-check
"use server"

import db from "../../../lib/db"
import { currentUser } from "@clerk/nextjs/server"

export const onBoardUser = async () => {
  try {
    const user = await currentUser()
    if (!user) {
      return {
        sucess: false,
        error: "No authenticated user found",
      }
    }
    const { id, firstName, lastName, imageUrl, emailAddresses } = user

    const newuser = await db.user.upsert({
      where: {
        clerkid: id,
      },
      update: {
        name:
          firstName && lastName
            ? `${firstName} ${lastName} `
            : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
      },
      create: {
        clerkId: id,
        name:
          firstName && lastName
            ? `${firstName} ${lastName} `
            : firstName || lastName || null,
        image: imageUrl || null,
        email: emailAddresses[0]?.emailAddress || "",
      },
    })
    return {
      sucess: true,
      user: newuser,
      message: "User onboarded sucessfully",
    }
  } catch (error) {
    console.log(error)
    return {
      sucess: false,
      error: "Failed to onboard user",
    }
  }
}

export const getCurrentuser = async () => {
  try {
    const user = await currentUser()
    if (!user) {
      return null
    }
    const dbUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        name: true,
        image: true,
        clerkId: true,
      },
    })
    return dbUser
  } catch (error) {
    console.log(error)
    return null
  }
}
