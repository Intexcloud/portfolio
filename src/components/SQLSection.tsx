import { useEffect } from 'react';
import { useTilt } from '../hooks/useTilt';
import FadeIn from './FadeIn';

declare global {
    interface Window { Prism?: { highlightAll: () => void }; }
}

function SQLCard({ title, code, desc, tags }: {
    title: string; code: string; desc: string; tags: Array<{ text: string; cls?: string }>;
}) {
    const { ref, onMouseMove, onMouseLeave } = useTilt(6);
    return (
        <div
            ref={ref}
            className="project-card tilt-card"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ marginTop: '1rem' }}
        >
            <h3>{title}</h3>
            <pre><code className="language-sql">{code}</code></pre>
            <p className="project-desc" style={{ marginTop: '0.75rem' }}>{desc}</p>
            <div className="project-tags">
                {tags.map(t => <span key={t.text} className={`tag ${t.cls ?? 'tag-green'}`}>{t.text}</span>)}
            </div>
        </div>
    );
}

export default function SQLSection() {
    useEffect(() => {
        window.Prism?.highlightAll();
    }, []);

    return (
        <section id="sql">
            <div className="container">
                <FadeIn>
                    <div className="section-label">Technical Expertise</div>
                    <div className="section-title">SQL Analytics &amp; AI Scoring</div>
                    <p className="section-desc">
                        Advanced SQL used to power business dashboards and data-driven candidate scoring application.
                        Covering KPI analytics, data aggregation, and multi-factor candidate scoring with benchmarking logic.
                    </p>
                </FadeIn>

                <SQLCard
                    title="📊 Business KPI Aggregation"
                    code={`SELECT
    COUNT(DISTINCT order_id) AS total_orders,
    COUNT(DISTINCT customer_id) AS unique_customers,
    ROUND(SUM(sales), 2) AS total_revenue,
    ROUND(SUM(profit), 2) AS total_profit,
    ROUND(SUM(profit) / SUM(sales) * 100, 1) AS profit_margin_pct
FROM orders;`}
                    desc="Aggregates core business metrics used in dashboard reporting including revenue, profit, and customer insights."
                    tags={[{ text: 'SQL' }, { text: 'KPI Analytics', cls: 'tag' }, { text: 'Data Aggregation', cls: 'tag' }]}
                />

                <SQLCard
                    title="🤖 AI Talent Scoring Engine"
                    code={`SELECT
    employee_id,
    ROUND( (
        cognitive_score * 0.30 +
        competency_score * 0.30 +
        behavioral_score * 0.20 +
        contextual_score * 0.20
    ), 2) AS final_match_rate
FROM talent_scores
ORDER BY final_match_rate DESC
LIMIT 10;`}
                    desc="Multi-factor scoring model used to rank candidates based on skills, competencies, behavior, and experience."
                    tags={[{ text: 'SQL' }, { text: 'AI Scoring', cls: 'tag' }, { text: 'Ranking Model', cls: 'tag' }]}
                />

                <SQLCard
                    title="⚡ Advanced SQL Logic (Benchmarking)"
                    code={`percentile_cont(0.5)
WITHIN GROUP (ORDER BY score) AS baseline_score`}
                    desc="Uses median-based benchmarking instead of average to reduce bias and improve scoring accuracy in talent evaluation."
                    tags={[{ text: 'Advanced SQL' }, { text: 'Window Function', cls: 'tag' }, { text: 'Data Modeling', cls: 'tag' }]}
                />
            </div>
        </section>
    );
}
