'use client'

import { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    service: '',
    date: '',
    location: '',
    details: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const message = `*New Celebration Enquiry*%0a%0a*Name:* ${formData.name}%0a*WhatsApp:* ${formData.whatsapp}%0a*Email:* ${formData.email}%0a*Service:* ${formData.service}%0a*Date:* ${formData.date}%0a*Location:* ${formData.location}%0a%0a*Details:* ${formData.details}`
    
    window.open(`https://api.whatsapp.com/send?phone=971501198447&text=${message}`, '_blank')
  }

  return (
    <div className="w-full">
      <h2 className="font-[family-name:var(--font-playfair)] font-medium text-[clamp(28px,3vw,36px)] text-[#171717] mb-10">
        Let&apos;s Plan Your Moment.
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-field"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            required
            className="form-field"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="form-field"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="relative">
          <select
            name="service"
            required
            className="form-field-select"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>What Are You Celebrating?</option>
            <option value="Birthday">Birthday</option>
            <option value="Private Party">Private Party</option>
            <option value="Valentine's">Valentine&apos;s</option>
            <option value="Wedding Anniversary">Wedding Anniversary</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Other">Other</option>
          </select>
          {/* Custom chevron */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#716A67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <input
            type="text"
            name="date"
            placeholder="Preferred Date"
            required
            className="form-field"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="form-field"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="details"
          placeholder="Tell Us About Your Celebration"
          required
          rows={4}
          className="w-full bg-transparent border-0 border-b border-[#716A67]/25 py-4 text-sm text-[#171717] placeholder:text-[#716A67]/50 focus:outline-none focus:border-[#F16F63] transition-colors resize-none"
          value={formData.details}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 bg-[#171717] hover:bg-[#F16F63] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-5 transition-colors font-medium mt-4"
        >
          SEND ENQUIRY
          <ArrowRight size={13} strokeWidth={2.5} />
        </button>
      </form>

      <div className="mt-14 pt-8 border-t border-[#F7F4F2] flex items-center justify-between">
        <span className="text-[#716A67] text-sm">Prefer WhatsApp?</span>
        <a
          href="https://wa.me/971501198447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#F16F63] text-[10px] tracking-[0.18em] uppercase font-medium hover:opacity-70 transition-opacity"
        >
          <MessageCircle size={14} strokeWidth={2} />
          CHAT WITH US
        </a>
      </div>
    </div>
  )
}
