import { useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const skills = [
    { icon: '🗄️', name: 'SQL / Oracle DB', level: 'Advanced', cls: 'level-advanced' },
    { icon: '📊', name: 'Power BI', level: 'Advanced', cls: 'level-advanced' },
    { icon: '📗', name: 'Excel', level: 'Advanced', cls: 'level-advanced' },
    { icon: '🔍', name: 'Data Cleaning & Validation', level: 'Advanced', cls: 'level-advanced' },
    { icon: '🐍', name: 'Python', level: 'Intermediate', cls: 'level-intermediate' },
    { icon: '📈', name: 'Data Visualization', level: 'Intermediate', cls: 'level-intermediate' },
    { icon: '📡', name: 'Looker Studio', level: 'Intermediate', cls: 'level-intermediate' },
    { icon: '🧠', name: 'Data Storytelling', level: 'Intermediate', cls: 'level-intermediate' },
];

function SkillBox({ s }: { s: typeof skills[0] }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className="skill-box fade-in">
            <div className="skill-box-icon">{s.icon}</div>
            <h4>{s.name}</h4>
            <span className={`skill-level ${s.cls}`}>{s.level}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <FadeIn>
                    <div className="section-label">Tech Stack</div>
                    <div className="section-title">Skills &amp; Tools</div>
                    <p className="section-desc">A complete toolkit from data collection to visualization and predictive modeling.</p>
                </FadeIn>
                <div className="skills-grid">
                    {skills.map(s => <SkillBox key={s.name} s={s} />)}
                </div>
            </div>
        </section>
    );
}
