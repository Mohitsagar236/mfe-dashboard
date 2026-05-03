import styles from './Dashboard.module.css';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>📊 Dashboard MFE</h1>
        <p className={styles.description}>
          This is the Dashboard microfrontend. It automatically uses the host theme.
        </p>
        
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Total Users</span>
            <span className={styles.statValue}>1,234</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Active Sessions</span>
            <span className={styles.statValue}>567</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statLabel}>Revenue</span>
            <span className={styles.statValue}>$89,234</span>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.infoText}>
            ✅ Theme variables are applied automatically
          </p>
          <p className={styles.infoText}>
            ✅ Layout changes (sidebar/top-nav) are responsive
          </p>
          <p className={styles.infoText}>
            ✅ Listens to theme-changed events for canvas/SVG updates
          </p>
        </div>
      </div>
    </div>
  );
}
