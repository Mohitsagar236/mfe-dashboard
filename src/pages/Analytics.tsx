import styles from './Pages.module.css';

export function Analytics() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>📈 Analytics</h1>
      
      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3>Page Views</h3>
          <div className={styles.chartPlaceholder}>
            <div style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' }}></div>
          </div>
          <p className={styles.chartLabel}>📊 15,234 views this month</p>
        </div>

        <div className={styles.chartCard}>
          <h3>User Growth</h3>
          <div className={styles.chartPlaceholder}>
            <div style={{ height: '200px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '8px' }}></div>
          </div>
          <p className={styles.chartLabel}>📈 12% increase</p>
        </div>

        <div className={styles.chartCard}>
          <h3>Conversion Rate</h3>
          <div className={styles.chartPlaceholder}>
            <div style={{ height: '200px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '8px' }}></div>
          </div>
          <p className={styles.chartLabel}>💰 3.45% conversion</p>
        </div>

        <div className={styles.chartCard}>
          <h3>Engagement</h3>
          <div className={styles.chartPlaceholder}>
            <div style={{ height: '200px', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', borderRadius: '8px' }}></div>
          </div>
          <p className={styles.chartLabel}>🎯 8.7 avg session time</p>
        </div>
      </div>

      <div className={styles.metricsSection}>
        <h2>Key Metrics</h2>
        <table className={styles.metricsTable}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Current</th>
              <th>Previous</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Sessions</td>
              <td>45,234</td>
              <td>40,123</td>
              <td className={styles.positive}>+12.7%</td>
            </tr>
            <tr>
              <td>Bounce Rate</td>
              <td>23.4%</td>
              <td>28.1%</td>
              <td className={styles.positive}>-4.7%</td>
            </tr>
            <tr>
              <td>Avg. Duration</td>
              <td>4m 23s</td>
              <td>3m 51s</td>
              <td className={styles.positive}>+13.9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
