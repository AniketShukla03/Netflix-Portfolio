"use client"

import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"

export default function NavBar() {
  return (
    <header className="border-b border-zinc-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-white">
          Aniket<span className="text-red-600">.AI</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden space-x-6 text-sm font-medium text-zinc-300 md:flex">
          <Link href="#featured" className="hover:text-white">Featured</Link>
          <Link href="#all" className="hover:text-white">Projects</Link>
          <Link href="#blog" className="hover:text-white">Blog</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>

        {/* Icons + Resume */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/shukla-aniket/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/AniketShukla03"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="/aniket_resume_2025_AI.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded border border-red-600 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  )
}
