import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Electrical Engineer Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><Linkedin size={18} /></a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
