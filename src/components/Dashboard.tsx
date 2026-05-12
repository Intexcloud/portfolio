import FadeIn from './FadeIn';

export default function Dashboard() {
    return (
        <section className="dashboard-section" id="dashboard">
            <div className="container">
                <FadeIn>
                    <div className="section-label">Live Dashboard</div>
                    <div className="section-title">Sales<br />Dashboard</div>
                    <p className="section-desc">
                        Real-time dashboard integrated with Looker Studio tracking KPIs, revenue, and business trends live.
                    </p>
                    <p>
                        <strong>Data Pipeline:</strong><br />
                        Raw Data → Data Cleaning (Python) → SQL Database → Analytical Queries → Looker Studio Dashboard
                        <br /><br />
                        <strong>Explanation:</strong><br />
                        • Data is cleaned and transformed using Python (Pandas)<br />
                        • Stored in structured SQL tables<br />
                        • SQL queries generate KPIs and aggregated metrics<br />
                        • Results are visualized in Looker Studio dashboard
                    </p>
                    <div style={{ marginTop: '1.5rem', fontSize: '13px', color: 'var(--ink3)' }}>
                        <strong>Architecture Flow:</strong><br />
                        CSV Dataset → Python (Cleaning) → SQLite Database → SQL Queries → Looker Studio → Dashboard
                    </div>
                    <div className="dashboard-embed-wrapper" style={{ marginTop: '1.5rem' }}>
                        <div className="dashboard-toolbar">
                            <div className="dashboard-dots">
                                <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
                            </div>
                            <div className="dashboard-title-bar">Looker Studio Sales Performance Dashboard</div>
                            <div className="dashboard-actions">
                                <a href="https://datastudio.google.com/reporting/9136a5d9-ee26-48e8-af84-0d1e1dd80aea/page/uggvF"
                                    target="_blank" rel="noreferrer" className="dashboard-btn">Open Fullscreen ↗</a>
                            </div>
                        </div>
                        <iframe
                            className="looker-iframe"
                            src="https://datastudio.google.com/embed/reporting/9136a5d9-ee26-48e8-af84-0d1e1dd80aea/page/uggvF"
                            frameBorder={0}
                            allowFullScreen
                            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                        />
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <h4>How SQL Powers This Dashboard</h4>
                        <ul style={{ marginTop: '8px', paddingLeft: '18px', fontSize: '14px', color: 'var(--ink2)' }}>
                            <li><strong>KPI Cards:</strong> Generated using KPI Overview Query</li>
                            <li><strong>Revenue Trend:</strong> Built from monthly aggregation query</li>
                            <li><strong>Customer Segmentation:</strong> Derived from SQL grouping &amp; aggregation</li>
                            <li><strong>Profit Analysis:</strong> Calculated using margin and discount queries</li>
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
