import React from "react"
import { onBoardUser } from "../../modules/auth/actions"

const Layout = async ({ children }) => {
  await onBoardUser()
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* {navbar} */}
      <div className="dark:bg-[radial-gradient(#393e4a_1px,transparent_1px) bg-[radial-gradient(#dadde2_1px,transparent_1px)]] fixed inset-0 -z-10 h-full w-full bg-background [background-size:16px_16px]" />
      <div className="mt-20 w-full flex-1">{children}</div>
    </main>
  )
}

export default Layout
