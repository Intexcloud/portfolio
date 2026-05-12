import FadeIn from './FadeIn';

export default function DashboardAI() {
    return (
        <section className="dashboard-section" id="dashboard-ai">
            <div className="container">
                <FadeIn>
                    <div className="section-label">AI Intelligence</div>
                    <div className="section-title">AI Talent<br />Scoring System</div>
                    <p className="section-desc">
                        A data-driven Talent Match Intelligence system built on SQL pattern discovery + LLM integration.
                        Identifies success patterns from employee performance data via EDA, operationalizes them into modular
                        SQL scoring logic (CTE + median benchmarking), and surfaces insights through an AI-augmented Streamlit dashboard.
                    </p>
                    <p>
                        <strong>AI Pipeline:</strong><br />
                        Employee Data → EDA (Pattern Discovery) → SQL Scoring Logic (CTE) → LLM Integration → Streamlit Dashboard
                        <br /><br />
                        <strong>Explanation:</strong><br />
                        • EDA (heatmap, radar chart, correlation) identifies success patterns from top performers (rating 5)<br />
                        • Modular SQL scoring via CTE + percentile_cont for median-based benchmarking<br />
                        • LLM (OpenRouter API) generates job descriptions dynamically from role context<br />
                        • Output: Job Fit Score, candidate tier (High Match / At Risk), gap analysis per competency
                    </p>
                    <div style={{ marginTop: '1.5rem', fontSize: '13px', color: 'var(--ink3)' }}>
                        <strong>Architecture Flow:</strong><br />
                        Employee Data (Supabase) → EDA (Pattern Discovery) → SQL Scoring Engine (CTE) → LLM Integration (OpenRouter) → Streamlit Dashboard
                    </div>
                    <div className="dashboard-embed-wrapper" style={{ marginTop: '1.5rem' }}>
                        <div className="dashboard-toolbar">
                            <div className="dashboard-dots">
                                <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
                            </div>
                            <div className="dashboard-title-bar">AI Candidate Scoring Engine</div>
                            <div className="dashboard-actions">
                                <a href="https://ai-talent-match-intelligence.streamlit.app/" target="_blank"
                                    rel="noreferrer" className="dashboard-btn">Open Fullscreen ↗</a>
                            </div>
                        </div>
                        <div style={{ background: 'var(--surface2)' }}>
                            <iframe
                                src="https://ai-talent-match-intelligence.streamlit.app/?embedded=true"
                                style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <h4>Scoring Formula</h4>
                        <ul style={{ marginTop: '8px', paddingLeft: '18px', fontSize: '14px', color: 'var(--ink2)' }}>
                            <li>Cognitive contributes highest weight (35%)</li>
                            <li>Competency contributes 30%</li>
                            <li>Behavioral contributes 25%</li>
                            <li>Contextual contributes 10%</li>
                            <li>Final output: Job Fit Score (%), ranked against median benchmark</li>
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
