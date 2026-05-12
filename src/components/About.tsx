import { useTilt } from '../hooks/useTilt';
import FadeIn from './FadeIn';

export default function About() {
    const { ref, onMouseMove, onMouseLeave } = useTilt(4);

    return (
        <section id="about">
            <div className="container">
                <div className="about-inner">
                    <FadeIn>
                        <div
                            ref={ref}
                            className="avatar-wrap tilt-card"
                            onMouseMove={onMouseMove}
                            onMouseLeave={onMouseLeave}
                        >
                            <div className="avatar-img">
                                <img src="avatar.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} alt="Sandy Aprilyanto" />
                            </div>
                            <div className="avatar-badge">
                                📍 Tegal, Indonesia<br />
                                🎓 Information Systems · GPA 3.73
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="about-content">
                            <div className="section-label">About Me</div>
                            <div className="section-title">Detail-Oriented,<br />Data-Driven</div>
                            <p className="about-body">
                                Information Systems graduate from Universitas Kristen Satya Wacana with a GPA of 3.73. Skilled
                                in data analysis, SQL, and Business Intelligence particularly Power BI and Excel to support
                                data-driven decision making.
                            </p>
                            <p className="about-body">
                                Experienced in data cleaning, validation, and descriptive analysis (trends, segmentation,
                                business performance), as well as presenting insights through data storytelling to
                                cross-functional stakeholders.
                            </p>
                            <ul className="exp-list">
                                <li className="exp-item">
                                    <span className="exp-year">Jan–Mar 2025</span>
                                    <div className="exp-text">
                                        <h4>Data Analyst · Department of Communication &amp; Informatics</h4>
                                        <p>Processed operational data into analytical reports, improved data accuracy to 95%, and increased reporting efficiency by 10%.</p>
                                    </div>
                                </li>
                                <li className="exp-item">
                                    <span className="exp-year">Aug–Dec 2024</span>
                                    <div className="exp-text">
                                        <h4>Application Developer · Department of Marine Affairs &amp; Fisheries</h4>
                                        <p>Developed data processing systems, improved operational efficiency by 15%, and database storage efficiency by 25%.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
