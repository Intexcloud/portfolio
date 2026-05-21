import { useTilt } from '../hooks/useTilt';
import FadeIn from './FadeIn';

interface Project {
    icon: string; iconBg: string;
    title: string; desc: string;
    insights: string[]; impacts: string[];
    tags: Array<{ text: string; cls: string }>;
    codeUrl?: string; liveUrl: string;
    delay?: number;
}

const projects: Project[] = [
    {
        icon: '📊', iconBg: '#EBF2FD',
        title: 'Sales Dashboard & Data Analysis',
        desc: 'Developed an interactive dashboard to monitor sales performance in real-time with high accuracy.',
        insights: [
            'Top products contribute 30–40% of revenue',
            'Identified sales trends & seasonality',
            'Customer segmentation highlights high-value users',
        ],
        impacts: [
            'Discounts above 20% turn profit negative — flags pricing risk instantly',
            'Quadrant chart separates high margin vs high volume SKUs for prioritization',
        ],
        tags: [{ text: 'Power BI', cls: 'tag-blue' }, { text: 'SQL', cls: 'tag-blue' }, { text: 'Looker Studio', cls: 'tag' }],
        liveUrl: 'https://datastudio.google.com/embed/reporting/9136a5d9-ee26-48e8-af84-0d1e1dd80aea/page/uggvF',
        codeUrl: 'https://github.com/Intexcloud/sales-analysis',
    },
    {
        icon: '🌪️', iconBg: '#EBF2FD',
        title: 'E-Commerce Funnel Analysis',
        desc: 'Mapped the end-to-end customer journey from product view to final payment to pinpoint conversion friction.',
        insights: [
            'Isolated a high 33.8% cancellation rate across all payment methods.',
            'Pinpointed massive 59% return rates in Beauty and Apparel categories.',
            'Contrasted volume driven F&B revenue against high AOV Electronics sales.',
        ],
        impacts: [
            'Identified 33.8% cancellation drop-off and flagged 59% peak category returns.',
            'Streamlined reporting by tracking 83.2% Conversion and 13.1% Return Rates.',
        ],
        tags: [{ text: 'SQL', cls: 'tag-blue' }, { text: 'Looker Studio', cls: 'tag-blue' }, { text: 'Conversion Optimization', cls: 'tag' }],
        codeUrl: 'https://github.com/Intexcloud/Funnel-Analysis',
        liveUrl: 'https://datastudio.google.com/embed/reporting/25ebbe30-46af-4ea2-8f93-8673b6c5edee/page/xQFxF',
        delay: 0.32,
    },
    {
        icon: '📈', iconBg: '#FAEEDA',
        title: 'Demand Forecasting',
        desc: 'Built an end-to-end ML pipeline to forecast monthly FMCG sales across multiple SKUs from 190k+ transactions.',
        insights: [
            'Compared XGBoost vs LightGBM, XGBoost selected automatically via RMSE (310.76 vs 316.25).',
            'Lag features (1–6 months) capture seasonal demand patterns per SKU.',
            'Variance analysis flags over/under-forecast risk per product.',
        ],
        impacts: [
            'Analyzed 190k+ transactions to minimize stockouts and overstock risks.',
            'Automated workflows to eliminate manual effort and human forecasting error.',
        ],
        tags: [{ text: 'Python', cls: 'tag-amber' }, { text: 'Pandas', cls: 'tag-amber' }, { text: 'scikit-learn', cls: 'tag' }],
        codeUrl: 'https://github.com/Intexcloud/fmcg-ai-forecast',
        liveUrl: 'https://fmcg-ai-forecast.streamlit.app/',
        delay: 0.24,
    },
    {
        icon: '📉', iconBg: '#FDECEC',
        title: 'Customer Churn Analysis',
        desc: 'Created interactive churn dashboards to analyze retention risks, revenue exposure, and behavioral patterns.',
        insights: [
            'Month to month customers showed the highest churn rate at 43%.',
            'Electronic check users recorded the highest churn propensity at 45%.',
            'Customer churn was heavily concentrated within the first 12 months of tenure.',
        ],
        impacts: [
            'Detected 118.9K at risk revenue concentrated in short term contracts.',
            'Mapped early interventions to target high risk customer segments.',
        ],
        tags: [{ text: 'SQL', cls: 'tag-blue' }, { text: 'Looker Studio', cls: 'tag-blue' }, { text: 'Customer Analytics', cls: 'tag' }],
        codeUrl: 'https://github.com/Intexcloud/telcom-churn-analysis',
        liveUrl: 'https://datastudio.google.com/embed/reporting/5c0c882f-a70e-4008-a4cf-dee78a94dc18/page/UWNxF',
        delay: 0.16,
    },
    {
        icon: '🤖', iconBg: '#EEEDFE',
        title: 'AI Talent Scoring System',
        desc: 'Developed a scoring system to evaluate talent based on skills, experience, and performance.',
        insights: [
            'EDA (heatmap, radar chart, correlation) uncovers success patterns from top performers (rating 5).',
            'Median-based SQL benchmarking via CTE + percentile_cont reduces scoring bias.',
            'LLM (OpenRouter API) generates job profiles dynamically from role context.',
        ],
        impacts: [
            'Enables faster, objective succession decisions backed by structured data',
            'Reduces manual job profile writing from hours to seconds',
        ],
        tags: [{ text: 'Python', cls: 'tag-amber' }, { text: 'SQL CTE', cls: 'tag' }, { text: 'LLM API', cls: 'tag' }],
        codeUrl: 'https://github.com/Intexcloud/Ai-Talent-Dashboard',
        liveUrl: 'https://ai-talent-match-intelligence.streamlit.app/',
        delay: 0.08,
    },
];

function ProjectCard({ p }: { p: Project }) {
    const { ref, onMouseMove, onMouseLeave } = useTilt(7);
    return (
        <FadeIn delay={p.delay ?? 0}>
            <div
                ref={ref}
                className="project-card tilt-card"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="project-icon" style={{ background: p.iconBg }}>{p.icon}</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {p.codeUrl && (
                            <a href={p.codeUrl} target="_blank" rel="noreferrer" className="dashboard-btn">View Code</a>
                        )}
                        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-card-action">Live App ↗</a>
                    </div>
                </div>
                <h3>{p.title}</h3>
                <div className="project-desc">
                    {p.desc}
                    <br /><br /><strong>Insights:</strong>
                    <ul>
                        {p.insights.map(i => <li key={i}>{i}</li>)}
                    </ul>
                </div>
                <div className="project-impact">
                    <strong>Impact:</strong>
                    <ul>{p.impacts.map(i => <li key={i}>{i}</li>)}</ul>
                </div>
                <div className="project-tags">
                    {p.tags.map(t => <span key={t.text} className={`tag ${t.cls}`}>{t.text}</span>)}
                </div>
            </div>
        </FadeIn>
    );
}

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-label">Portfolio Projects</div>
                <div className="section-title">Selected Works</div>
                <p className="section-desc">Real analytics projects that delivered measurable insights and business impact.</p>
                <div className="projects-grid">
                    {projects.map(p => <ProjectCard key={p.title} p={p} />)}
                </div>
            </div>
        </section>
    );
}
