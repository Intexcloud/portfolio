import { useTilt } from '../hooks/useTilt';
import FadeIn from './FadeIn';

const certs = [
    { icon: '🗄️', bg: '#EBF2FD', title: 'Oracle DB Design & Programming with SQL', org: 'Oracle Academy' },
    { icon: '📊', bg: '#EAF3DE', title: 'Introduction to Data Analysis', org: 'Online Certification' },
    { icon: '🐍', bg: '#FAEEDA', title: 'Crash Course on Python', org: 'Google / Coursera' },
    { icon: '🔬', bg: '#EEEDFE', title: 'Python Project for Data Science', org: 'IBM / Coursera' },
    { icon: '📗', bg: '#EAF3DE', title: 'Excel Basic for Data Analytics', org: 'Online Certification' },
    { icon: '📈', bg: '#EBF2FD', title: 'Data Visualization & Dashboards — Excel & Cognos', org: 'IBM / Coursera' },
];

function CertCard({ c }: { c: typeof certs[0] }) {
    const { ref, onMouseMove, onMouseLeave } = useTilt(5);
    return (
        <FadeIn>
            <div
                ref={ref}
                className="tilt-card"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '1.25rem',
                    background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                }}
            >
                <div style={{
                    width: '36px', height: '36px', borderRadius: '9px', background: c.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '16px',
                }}>{c.icon}</div>
                <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--ink)', marginBottom: '2px' }}>{c.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--ink3)' }}>{c.org}</div>
                </div>
            </div>
        </FadeIn>
    );
}

export default function Certifications() {
    return (
        <section style={{ background: 'var(--surface)' }} id="sertifikasi">
            <div className="container">
                <div className="section-label">Training &amp; Certifications</div>
                <div className="section-title">Credentials</div>
                <p className="section-desc">Certifications that strengthen my competence in data analysis and professional development.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
                    {certs.map(c => <CertCard key={c.title} c={c} />)}
                </div>
            </div>
        </section>
    );
}
