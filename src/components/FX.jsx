import React from 'react'

// Subtle global background effects with animated gradient orbs and grid glow
export default function FX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none">
      {/* Animated aurora backdrop */}
      <div className="absolute inset-0 bg-aurora opacity-60" />

      {/* Gradient orbs */}
      <span className="orb orb-cyan" style={{ top: '-10%', left: '-6%' }} />
      <span className="orb orb-pink" style={{ top: '20%', right: '-8%' }} />
      <span className="orb orb-amber" style={{ bottom: '-12%', left: '10%' }} />

      {/* Soft grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-900" />
        <rect width="100%" height="100%" fill="url(#fade)" />
      </svg>
    </div>
  )
}
