import { useState } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    function handleSubmit() {
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1500);
    }

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-inner">
                    <FadeIn>
                        <div className="contact-info">
                            <div className="section-label">Get In Touch</div>
                            <div className="section-title">Let's Collaborate</div>
                            <p className="section-desc" style={{ marginBottom: '2rem' }}>
                                Interested in discussing a data analytics project, data consultation, or just want to talk about data? Feel free to reach out.
                            </p>
                            <ul className="contact-link-list">
                                <li className="contact-link-item">
                                    <div className="contact-icon">📧</div>
                                    <div>
                                        <div style={{ fontSize: '11px', color: 'var(--ink3)', marginBottom: '2px' }}>Email</div>
                                        <a href="mailto:sandyaprlynto@gmail.com">sandyaprlynto@gmail.com</a>
                                    </div>
                                </li>
                                <li className="contact-link-item">
                                    <div className="contact-icon">💼</div>
                                    <div>
                                        <div style={{ fontSize: '11px', color: 'var(--ink3)', marginBottom: '2px' }}>LinkedIn</div>
                                        <a href="https://linkedin.com/in/sandyaprilyanto" target="_blank" rel="noreferrer">linkedin.com/in/sandyaprilyanto</a>
                                    </div>
                                </li>
                                <li className="contact-link-item">
                                    <div className="contact-icon">🐙</div>
                                    <div>
                                        <div style={{ fontSize: '11px', color: 'var(--ink3)', marginBottom: '2px' }}>GitHub</div>
                                        <a href="https://github.com/Intexcloud" target="_blank" rel="noreferrer">github.com/Intexcloud</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="contact-form">
                            <div className="form-row">
                                <div><label>Name</label><input type="text" placeholder="John Doe" /></div>
                                <div><label>Email</label><input type="email" placeholder="john@company.com" /></div>
                            </div>
                            <div>
                                <label>Subject</label>
                                <input type="text" placeholder="Data Analytics Project Consultation" />
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea placeholder="Tell me about your project or what you'd like to discuss..." />
                            </div>
                            <button
                                className="form-submit"
                                onClick={handleSubmit}
                                disabled={status !== 'idle'}
                                style={status === 'sent' ? { background: '#28C840' } : {}}
                            >
                                {status === 'idle' ? 'Send Message →' : status === 'sending' ? 'Sending...' : '✓ Sent!'}
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
