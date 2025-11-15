import { Briefcase, Cpu, Zap, Wrench, GraduationCap, CircuitBoard, ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I'm an electrical engineer specializing in power systems, electronics design, and embedded development. I enjoy turning complex problems into reliable, elegant solutions — from circuit design and PCB layout to system integration and testing.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                {icon: <Cpu className="text-blue-600" size={18} />, text: 'Embedded Systems'},
                {icon: <Zap className="text-blue-600" size={18} />, text: 'Power Electronics'},
                {icon: <Wrench className="text-blue-600" size={18} />, text: 'Testing & Validation'},
                {icon: <CircuitBoard className="text-blue-600" size={18} />, text: 'PCB Design'},
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-gray-900">Core Strengths</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Circuit design, simulation, and analysis</li>
              <li>• Power distribution and protection coordination</li>
              <li>• Microcontrollers, RTOS, and low-level firmware</li>
              <li>• Instrumentation, measurement, and data acquisition</li>
              <li>• Cross-functional collaboration with mechanical and software teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const roles = [
    {
      company: 'TechGrid Energy',
      role: 'Electrical Engineer',
      period: '2021 — Present',
      bullets: [
        'Designed and validated power conversion circuits for industrial systems',
        'Led PCB designs with EMI/EMC considerations and safety compliance',
        'Implemented automated test setups and data logging',
      ],
    },
    {
      company: 'VoltLab',
      role: 'Embedded Engineer',
      period: '2019 — 2021',
      bullets: [
        'Developed firmware for ARM-based microcontrollers in C/C++',
        'Integrated sensors and communication protocols (SPI, I2C, CAN, UART)',
        'Optimized power consumption and reliability under constraints',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {roles.map((r, idx) => (
            <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{r.role}</h3>
                <span className="text-sm text-gray-500">{r.period}</span>
              </div>
              <p className="mt-1 text-gray-700">{r.company}</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    {
      title: 'Smart Energy Monitor',
      desc: 'ESP32-based power monitoring with cloud dashboard and alerts.',
      tags: ['ESP32', 'PCB', 'MQTT', 'React'],
      link: '#',
    },
    {
      title: 'DC-DC Converter Design',
      desc: 'High-efficiency buck converter with thermal and EMI optimization.',
      tags: ['Power', 'LTspice', 'Altium'],
      link: '#',
    },
    {
      title: 'Motor Control Board',
      desc: 'BLDC motor driver with FOC and safety features.',
      tags: ['STM32', 'FOC', 'CAN'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <a href="#contact" className="text-sm text-blue-700 hover:underline inline-flex items-center gap-1">Get in touch <ArrowUpRight size={16} /></a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <Briefcase className="text-blue-600" size={18} />
              </div>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-blue-600/10 text-blue-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { name: 'Circuit Design', level: 90 },
    { name: 'Embedded C/C++', level: 85 },
    { name: 'Power Systems', level: 80 },
    { name: 'PCB Layout', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Matlab/Simulink', level: 70 },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{s.name}</span>
                <span className="text-sm text-gray-600">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-600 rounded" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  const items = [
    { school: 'B.S. Electrical Engineering', org: 'Your University', year: '2015 — 2019' },
    { school: 'Professional Certifications', org: 'IEEE, Coursera', year: 'Ongoing' },
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((e, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{e.school}</h3>
              <p className="text-gray-700">{e.org}</p>
              <p className="text-sm text-gray-500">{e.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <p className="mt-3 text-gray-700">Feel free to reach out for collaborations or opportunities.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
            <input type="email" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your email" />
            <textarea className="sm:col-span-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4" placeholder="Message" />
            <button type="button" className="sm:col-span-2 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
