import styles from './Pages.module.css';

export function Reports() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>📋 Reports</h1>
      
      <div className={styles.filterBar}>
        <select className={styles.filterSelect}>
          <option>All Reports</option>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>
        <input type="date" className={styles.filterInput} />
        <button className={styles.filterButton}>Generate Report</button>
      </div>

      <div className={styles.reportsList}>
        <div className={styles.reportCard}>
          <div className={styles.reportHeader}>
            <h3>Monthly Summary - May 2026</h3>
            <span className={styles.reportDate}>Generated: May 2, 2026</span>
          </div>
          <p className={styles.reportDescription}>
            Comprehensive overview of all metrics for May 2026 including user engagement, sales, and operational data.
          </p>
          <div className={styles.reportStats}>
            <div>📊 45 pages</div>
            <div>📈 12.5 MB</div>
            <div>⏱️ Generated 2 hours ago</div>
          </div>
          <div className={styles.reportActions}>
            <button className={styles.actionButton}>📥 Download</button>
            <button className={styles.actionButton}>👁️ Preview</button>
            <button className={styles.actionButton}>🔗 Share</button>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.reportHeader}>
            <h3>Q1 2026 Financial Report</h3>
            <span className={styles.reportDate}>Generated: Apr 30, 2026</span>
          </div>
          <p className={styles.reportDescription}>
            Detailed financial analysis for Q1 2026 with revenue breakdowns, expenses, and profit margins.
          </p>
          <div className={styles.reportStats}>
            <div>💰 Revenue: $2.5M</div>
            <div>📉 Expenses: $1.8M</div>
            <div>✅ Profit: $700K</div>
          </div>
          <div className={styles.reportActions}>
            <button className={styles.actionButton}>📥 Download</button>
            <button className={styles.actionButton}>👁️ Preview</button>
            <button className={styles.actionButton}>🔗 Share</button>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.reportHeader}>
            <h3>Customer Satisfaction Report</h3>
            <span className={styles.reportDate}>Generated: Apr 15, 2026</span>
          </div>
          <p className={styles.reportDescription}>
            Customer feedback analysis and satisfaction metrics across all products and services.
          </p>
          <div className={styles.reportStats}>
            <div>⭐ Average Rating: 4.7/5</div>
            <div>😊 Satisfaction: 92%</div>
            <div>💬 Feedback: 1,234 responses</div>
          </div>
          <div className={styles.reportActions}>
            <button className={styles.actionButton}>📥 Download</button>
            <button className={styles.actionButton}>👁️ Preview</button>
            <button className={styles.actionButton}>🔗 Share</button>
          </div>
        </div>

        <div className={styles.reportCard}>
          <div className={styles.reportHeader}>
            <h3>Performance Audit Report</h3>
            <span className={styles.reportDate}>Generated: Apr 1, 2026</span>
          </div>
          <p className={styles.reportDescription}>
            System performance analysis including uptime, response times, and infrastructure metrics.
          </p>
          <div className={styles.reportStats}>
            <div>⏱️ Avg Response: 145ms</div>
            <div>✅ Uptime: 99.98%</div>
            <div>📊 Servers: 12 active</div>
          </div>
          <div className={styles.reportActions}>
            <button className={styles.actionButton}>📥 Download</button>
            <button className={styles.actionButton}>👁️ Preview</button>
            <button className={styles.actionButton}>🔗 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
