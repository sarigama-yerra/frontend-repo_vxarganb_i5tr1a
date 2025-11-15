import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ name = 'Electrical Engineer', title = 'Power • Electronics • Systems', location = 'Open to opportunities' }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <p className="inline-block mb-3 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium">Tech • Portfolio • Interactive</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            {name}
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            {title}
          </p>
          <p className="mt-1 text-gray-600">{location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 bg-white/80 backdrop-blur text-gray-900 rounded-lg shadow hover:bg-white transition">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
