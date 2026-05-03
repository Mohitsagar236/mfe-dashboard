import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <span className={styles.brandIcon}>📊</span>
        <span className={styles.brandName}>Dashboard</span>
      </div>

      <div className={styles.navMenu}>
        <Link 
          to="/" 
          className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
        >
          📈 Overview
        </Link>
        <Link 
          to="/analytics" 
          className={`${styles.navLink} ${isActive('/analytics') ? styles.active : ''}`}
        >
          📊 Analytics
        </Link>
        <Link 
          to="/reports" 
          className={`${styles.navLink} ${isActive('/reports') ? styles.active : ''}`}
        >
          📋 Reports
        </Link>
        <Link 
          to="/users" 
          className={`${styles.navLink} ${isActive('/users') ? styles.active : ''}`}
        >
          👥 Users
        </Link>
        <Link 
          to="/settings" 
          className={`${styles.navLink} ${isActive('/settings') ? styles.active : ''}`}
        >
          ⚙️ Settings
        </Link>
      </div>

      <div className={styles.navUser}>
        <div className={styles.userAvatar}>👤</div>
      </div>
    </nav>
  );
}
