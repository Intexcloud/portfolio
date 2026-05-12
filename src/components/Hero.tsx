import { useTilt } from '../hooks/useTilt';
import FadeIn from './FadeIn';

export default function Hero() {
    const { ref, onMouseMove, onMouseLeave } = useTilt(8);

    return (
        <section className="hero">
            <div className="hero-inner">
                <div>
                    <div className="hero-tag">
                        <span className="hero-tag-dot" />
                        Open to Remote opportunities
                    </div>
                    <h1>Sandy Aprilyanto<br /><span>Data Analyst</span></h1>
                    <p className="hero-sub">
                        Entry-level Data Analyst focused on SQL, dashboarding, and turning operational data into business
                        insights. Experienced in building dashboards and talent scoring systems that transform raw data into
                        actionable business insights.
                    </p>
                    <div className="hero-btns">
                        <a href="#dashboard" className="btn-primary">View Dashboard</a>
                        <a href="#projects" className="btn-outline">View Projects</a>
                        <a href="CV_Sandy_Aprilyanto.pdf" download className="btn-outline">Download CV</a>
                    </div>
                </div>

                <FadeIn>
                    <div
                        ref={ref}
                        className="hero-card tilt-card"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        <div className="stat-item">
                            <div className="stat-num">3.73</div>
                            <div className="stat-label">GPA / 4.0</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">4+</div>
                            <div className="stat-label">live analytics applications</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">190k+</div>
                            <div className="stat-label">transactions analyzed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">95%</div>
                            <div className="stat-label">Data Accuracy</div>
                        </div>
                        <div className="hero-tools">
                            {['SQL', 'Power BI', 'Excel', 'Python', 'Oracle DB', 'Looker Studio'].map(t => (
                                <span key={t} className="tool-chip">{t}</span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
