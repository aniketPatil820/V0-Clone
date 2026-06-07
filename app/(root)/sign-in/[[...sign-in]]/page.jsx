import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col">
      <section className="space-y-6 pt-[16vh] 2xl:pt-48">
        <SignIn />
      </section>
    </div>
  )
}
