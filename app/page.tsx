import dynamic from "next/dynamic"
import { Suspense } from "react"

const Component = dynamic(() => import("@/landing-page"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-white">Loading...</div>
    </div>
  ),
})

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}
