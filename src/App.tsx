import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Server, Code, Shield, Menu, X, Mail, 
  Layers, Router, Radio, Award, GraduationCap, Briefcase, Activity
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolio';

const GithubIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 18, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; style?: React.CSSProperties }> = ({ size = 18, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'net' | 'ftth'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const portfolio = PORTFOLIO_DATA;

  const navLinks = [
    { label: portfolio.labels.about, href: '#about' },
    { label: portfolio.labels.experience, href: '#experience' },
    { label: portfolio.labels.projects, href: '#projects' },
    { label: portfolio.labels.skills, href: '#skills' },
    { label: portfolio.labels.education, href: '#education' },
  ];

  const filteredProjects = portfolio.projects.filter(p => {
    if (activeTab === 'web') return p.category.includes('Fullstack');
    if (activeTab === 'net') return p.category.includes('Networking');
    if (activeTab === 'ftth') return p.category.includes('FTTH');
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)', position: 'relative' }}>
      
      {/* HEADER & NAV */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(9, 10, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: 'var(--radius-sm)',
              background: 'rgba(0, 243, 255, 0.1)', border: '1px solid var(--accent-cyan)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)'
            }}>
              <Terminal size={22} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                RUDY<span style={{ color: 'var(--accent-cyan)' }}>.dev</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                ● SLA &gt; 99% ONLINE
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', gap: '24px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={`mailto:${portfolio.profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(0, 243, 255, 0.15)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              {portfolio.labels.contact}
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'block' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}
            >
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: 'block', padding: '12px 0', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="about" style={{ padding: '80px 0 60px', position: 'relative' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          {/* Left Column: Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '20px',
              background: 'rgba(0, 255, 157, 0.08)', border: '1px solid rgba(0, 255, 157, 0.3)',
              color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '20px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 8px var(--accent-emerald)' }}></span>
              Telkom Akses Developer & IOAN Access Engineer
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px' }}>
              Bridging <span className="glow-text-cyan">Fullstack Web</span> & <span className="glow-text-emerald">Network Infra</span>
            </h1>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '24px', lineHeight: 1.7 }}>
              {portfolio.profile.summary}
            </p>

            {/* Stat Counters Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {portfolio.stats.map((st, i) => (
                <div key={i} className="glass-panel" style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Tech Badge Pill Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {['Laravel', 'React', 'Docker', 'FTTH Optical', 'MikroTik RouterOS', 'VLAN / PPPoE'].map((badge) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.08, borderColor: 'var(--accent-cyan)' }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)',
                    cursor: 'default'
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-cyan)',
                  color: '#000',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                View Selected Projects &rarr;
              </motion.a>

              <motion.a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-panel"
                style={{
                  padding: '12px 18px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600
                }}
              >
                <GithubIcon size={18} style={{ color: 'var(--accent-cyan)' }} /> GitHub
              </motion.a>

              <motion.a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glass-panel"
                style={{
                  padding: '12px 18px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 600
                }}
              >
                <LinkedinIcon size={18} style={{ color: '#0a66c2' }} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Photo Frame + Interactive Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1, boxShadow: '0 0 35px rgba(0, 243, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightboxImg(PORTFOLIO_DATA.profile.photo)}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '4 / 5',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(0,243,255,0.2) 0%, rgba(16,18,27,0.95) 100%)',
                border: '1px solid var(--accent-cyan)',
                boxShadow: '0 0 25px rgba(0, 243, 255, 0.2)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease'
              }}
            >
              <img
                src={PORTFOLIO_DATA.profile.photo}
                alt="Rudy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-sm)',
                  filter: 'contrast(105%)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                padding: '10px 14px',
                background: 'rgba(9, 10, 15, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--accent-cyan)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>RUDY</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Click to Expand &rarr;</div>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>● ACTIVE</div>
              </div>
            </motion.div>

            {/* LIVE TERMINAL WIDGET */}
            <div style={{
              width: '100%',
              maxWidth: '320px',
              background: '#0d0c0a',
              border: '1px solid var(--border-highlight)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-mono)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 20px var(--accent-cyan-glow)',
              overflow: 'hidden'
            }}>
              <div style={{
                background: '#14120f',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border)'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>rudy@infra-node:~</span>
              </div>
              <div style={{ padding: '14px 16px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <span style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}>$</span>
                  <span style={{ color: '#fff' }}>whoami</span>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>&gt; Rudy (Fullstack & Infra)</div>
                <div>
                  <span style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}>$</span>
                  <span style={{ color: '#fff' }}>check-stack --active</span>
                </div>
                <div style={{ color: 'var(--accent-emerald)' }}>[OK] Laravel / React / Docker</div>
                <div style={{ color: 'var(--accent-emerald)' }}>[OK] FTTH OLT / MikroTik RouterOS</div>
                <div>
                  <span style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}>$</span>
                  <span style={{ color: 'var(--accent-amber)' }}>status --sla</span>
                </div>
                <div style={{ color: 'var(--accent-cyan)' }}>SLA &gt; 99.0% (ONLINE)</div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Briefcase size={28} style={{ color: 'var(--accent-cyan)' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
                {portfolio.labels.expTitle}
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>{portfolio.labels.expSub}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {portfolio.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel"
                  style={{ padding: '24px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Activity size={18} style={{ color: 'var(--accent-emerald)' }} />
                        {exp.role}
                      </h3>
                      <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>{exp.company}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{exp.period}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.location}</div>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: exp.images ? '16px' : '0' }}>
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  {/* Experience Evidence Image Thumbnail with Lightbox Preview */}
                  {exp.images && exp.images.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      {exp.images.map((imgSrc, imgIdx) => (
                        <motion.div
                          key={imgIdx}
                          whileHover={{ scale: 1.02, borderColor: 'var(--accent-red)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setLightboxImg(imgSrc)}
                          style={{
                            width: '100%',
                            maxWidth: '300px',
                            height: '140px',
                            borderRadius: 'var(--radius-sm)',
                            overflow: 'hidden',
                            border: '1px solid var(--border)',
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                        >
                          <img src={imgSrc} alt="Work Evidence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'rgba(0,0,0,0.75)',
                            padding: '4px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent-emerald)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <span>EVIDENCE PHOTO</span>
                            <span>PREVIEW &rarr;</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
                {portfolio.labels.projTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>{portfolio.labels.projSub}</p>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', background: 'var(--surface)', padding: '4px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web & DevOps' },
                { id: 'net', label: 'Networking' },
                { id: 'ftth', label: 'FTTH Fiber' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: activeTab === tab.id ? 'var(--accent-cyan)' : 'transparent',
                    color: activeTab === tab.id ? '#000' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel"
                  style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{
                        fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)',
                        padding: '2px 8px', borderRadius: '4px', background: 'rgba(0,243,255,0.1)', border: '1px solid rgba(0,243,255,0.2)'
                      }}>
                        {proj.category}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {proj.period}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                      {proj.title}
                    </h3>

                    <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {proj.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>

                    {/* Project Evidence Image Thumbnails */}
                    {proj.images && proj.images.length > 0 && (
                      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${proj.images.length}, 1fr)`, gap: '8px', marginBottom: '16px' }}>
                        {proj.images.map((imgSrc, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setLightboxImg(imgSrc)}
                            style={{
                              height: '110px',
                              borderRadius: 'var(--radius-sm)',
                              overflow: 'hidden',
                              border: '1px solid var(--border)',
                              cursor: 'pointer'
                            }}
                          >
                            <img src={imgSrc} alt="Evidence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {proj.tech.map(t => (
                      <span key={t} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'var(--surface-hover)', padding: '3px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section id="skills" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Layers size={28} style={{ color: 'var(--accent-emerald)' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
                {portfolio.labels.skillsTitle}
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>{portfolio.labels.skillsSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              
              <div className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
                  <Code size={24} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Web Development</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {portfolio.skills.webDev.map(s => (
                    <span key={s} style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(0,243,255,0.08)', border: '1px solid rgba(0,243,255,0.2)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-emerald)', marginBottom: '16px' }}>
                  <Server size={24} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>DevOps & Server</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {portfolio.skills.devops.map(s => (
                    <span key={s} style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(0,255,157,0.08)', border: '1px solid rgba(0,255,157,0.2)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-amber)', marginBottom: '16px' }}>
                  <Router size={24} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>MikroTik & Routing</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {portfolio.skills.networking.map(s => (
                    <span key={s} style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,183,3,0.08)', border: '1px solid rgba(255,183,3,0.2)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
                  <Radio size={24} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>FTTH & Optical</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {portfolio.skills.ftth.map(s => (
                    <span key={s} style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(0,243,255,0.08)', border: '1px solid rgba(0,243,255,0.2)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{s}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <GraduationCap size={26} style={{ color: 'var(--accent-cyan)' }} />
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{portfolio.labels.eduTitle}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {portfolio.education.map((edu, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '20px' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{edu.institution}</div>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>{edu.degree}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      <span>{edu.detail}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Award size={26} style={{ color: 'var(--accent-amber)' }} />
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{portfolio.labels.certTitle}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {portfolio.groupedCertifications.map((group, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '20px', borderLeft: `4px solid ${group.color}` }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Shield size={20} style={{ color: group.color }} />
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{group.category}</h3>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', background: 'var(--surface-hover)', padding: '3px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                        {group.certs.length} Certificates
                      </span>
                    </div>

                    {/* Staging certificate items inside group */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                      {group.certs.map((cert, cIdx) => (
                        <motion.div
                          key={cIdx}
                          whileHover={{ scale: 1.02, translateX: 4, borderColor: group.color }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setLightboxImg(cert.pdf)}
                          style={{
                            padding: '10px 14px',
                            background: 'var(--surface-hover)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{cert.name}</span>
                          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: group.color, flexShrink: 0, marginLeft: '8px' }}>
                            VIEW &rarr;
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>RUDY — Fullstack & Infra Engineer</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Built with React, Framer Motion & Vite.</div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} title="GitHub"><GithubIcon size={20} /></a>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = '#0a66c2')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} title="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-emerald)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} title="Email"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL FOR FULL PHOTO PREVIEW */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
              background: 'rgba(5, 6, 10, 0.9)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              cursor: 'pointer'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                position: 'relative',
                maxWidth: '850px',
                width: '100%',
                height: '80vh',
                background: '#111',
                border: '1px solid var(--accent-cyan)',
                boxShadow: '0 0 40px rgba(0, 243, 255, 0.3)',
                overflow: 'hidden'
              }}
            >
              {lightboxImg.endsWith('.pdf') ? (
                <iframe
                  src={lightboxImg}
                  title="Document Preview"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <img
                  src={lightboxImg}
                  alt="Full Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              )}
              <button
                onClick={() => setLightboxImg(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#000',
                  border: '1px solid var(--accent-red)',
                  color: 'var(--accent-red)',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  zIndex: 10
                }}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
