"use client"

import { Loader } from "lucide-react"

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[rgb(var(--bg-1))]">
      <Loader className="ml-2 h-10 w-10 animate-spin justify-center items-center text-heading-1" />
    </div>
  )
}

export default loading