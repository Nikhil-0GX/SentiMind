// src/components/layout/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-slate-800/40 backdrop-blur-sm mt-auto border-t border-slate-700/50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p className="text-sm">
          &copy; {currentYear} Sentimind. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy" className="text-xs hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-xs">|</span>
          <Link href="/terms" className="text-xs hover:text-cyan-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer