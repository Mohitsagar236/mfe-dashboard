import { useState } from 'react';
import styles from './Pages.module.css';

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'Dashboard Pro',
    timezone: 'UTC',
    theme: 'auto',
    language: 'en',
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: true,
    dataRetention: '90days',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>⚙️ Settings</h1>
      
      <div className={styles.settingsGrid}>
        <div className={styles.settingsCard}>
          <h2>General Settings</h2>
          
          <div className={styles.settingGroup}>
            <label htmlFor="siteName">Site Name</label>
            <input
              id="siteName"
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className={styles.settingInput}
            />
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="timezone">Timezone</label>
            <select
              id="timezone"
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className={styles.settingSelect}
            >
              <option>UTC</option>
              <option>EST</option>
              <option>CST</option>
              <option>PST</option>
              <option>GMT</option>
            </select>
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              className={styles.settingSelect}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className={styles.settingSelect}
            >
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h2>Notification Settings</h2>
          
          <div className={styles.settingCheckbox}>
            <input
              id="emailNotifications"
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="emailNotifications">Enable Email Notifications</label>
          </div>

          <div className={styles.settingCheckbox}>
            <input
              id="smsNotifications"
              type="checkbox"
              name="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="smsNotifications">Enable SMS Notifications</label>
          </div>

          <h2 style={{ marginTop: '30px' }}>Security Settings</h2>

          <div className={styles.settingCheckbox}>
            <input
              id="twoFactorAuth"
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="twoFactorAuth">Enable Two-Factor Authentication</label>
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="dataRetention">Data Retention Period</label>
            <select
              id="dataRetention"
              name="dataRetention"
              value={settings.dataRetention}
              onChange={handleChange}
              className={styles.settingSelect}
            >
              <option value="30days">30 Days</option>
              <option value="60days">60 Days</option>
              <option value="90days">90 Days</option>
              <option value="1year">1 Year</option>
              <option value="indefinite">Indefinite</option>
            </select>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h2>Advanced Settings</h2>
          
          <div className={styles.settingGroup}>
            <label>API Key</label>
            <div className={styles.apiKeyDisplay}>
              sk_live_abc123xyz789...
              <button className={styles.copyButton}>📋 Copy</button>
            </div>
          </div>

          <div className={styles.settingGroup}>
            <label>Webhook URL</label>
            <input
              type="text"
              placeholder="https://your-domain.com/webhook"
              className={styles.settingInput}
            />
          </div>

          <div className={styles.settingGroup}>
            <h3>Danger Zone</h3>
            <p className={styles.warningText}>These actions cannot be undone.</p>
            <button className={styles.dangerButton}>🔴 Clear Cache</button>
            <button className={styles.dangerButton}>🔴 Reset Settings</button>
            <button className={styles.dangerButton}>🔴 Delete Account</button>
          </div>
        </div>
      </div>

      <div className={styles.settingsActions}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton} onClick={handleSave}>💾 Save Settings</button>
      </div>
    </div>
  );
}
