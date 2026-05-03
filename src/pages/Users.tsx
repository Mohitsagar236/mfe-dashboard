import styles from './Pages.module.css';

export function Users() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>👥 Users Management</h1>
      
      <div className={styles.filterBar}>
        <input 
          type="text" 
          placeholder="Search users by name or email..." 
          className={styles.searchInput}
        />
        <select className={styles.filterSelect}>
          <option>All Statuses</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
          <option>Banned</option>
        </select>
        <button className={styles.filterButton}>+ Add User</button>
      </div>

      <div className={styles.usersTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>JD</div>
                  <span>John Doe</span>
                </div>
              </td>
              <td>john.doe@example.com</td>
              <td><span className={styles.roleBadge + ' ' + styles.admin}>Admin</span></td>
              <td><span className={styles.statusBadge + ' ' + styles.active}>Active</span></td>
              <td>Jan 15, 2024</td>
              <td>2 hours ago</td>
              <td className={styles.actions}>
                <button className={styles.iconButton}>✏️</button>
                <button className={styles.iconButton}>🔍</button>
                <button className={styles.iconButton}>🗑️</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>JS</div>
                  <span>Jane Smith</span>
                </div>
              </td>
              <td>jane.smith@example.com</td>
              <td><span className={styles.roleBadge + ' ' + styles.user}>User</span></td>
              <td><span className={styles.statusBadge + ' ' + styles.active}>Active</span></td>
              <td>Feb 20, 2024</td>
              <td>5 minutes ago</td>
              <td className={styles.actions}>
                <button className={styles.iconButton}>✏️</button>
                <button className={styles.iconButton}>🔍</button>
                <button className={styles.iconButton}>🗑️</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>MC</div>
                  <span>Mike Chen</span>
                </div>
              </td>
              <td>mike.chen@example.com</td>
              <td><span className={styles.roleBadge + ' ' + styles.moderator}>Moderator</span></td>
              <td><span className={styles.statusBadge + ' ' + styles.inactive}>Inactive</span></td>
              <td>Mar 10, 2024</td>
              <td>3 days ago</td>
              <td className={styles.actions}>
                <button className={styles.iconButton}>✏️</button>
                <button className={styles.iconButton}>🔍</button>
                <button className={styles.iconButton}>🗑️</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>SR</div>
                  <span>Sarah Rodriguez</span>
                </div>
              </td>
              <td>sarah.r@example.com</td>
              <td><span className={styles.roleBadge + ' ' + styles.user}>User</span></td>
              <td><span className={styles.statusBadge + ' ' + styles.active}>Active</span></td>
              <td>Apr 5, 2024</td>
              <td>1 hour ago</td>
              <td className={styles.actions}>
                <button className={styles.iconButton}>✏️</button>
                <button className={styles.iconButton}>🔍</button>
                <button className={styles.iconButton}>🗑️</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>AB</div>
                  <span>Alex Brown</span>
                </div>
              </td>
              <td>alex.brown@example.com</td>
              <td><span className={styles.roleBadge + ' ' + styles.user}>User</span></td>
              <td><span className={styles.statusBadge + ' ' + styles.pending}>Pending</span></td>
              <td>Apr 28, 2026</td>
              <td>Never</td>
              <td className={styles.actions}>
                <button className={styles.iconButton}>✏️</button>
                <button className={styles.iconButton}>🔍</button>
                <button className={styles.iconButton}>🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageButton} disabled>&lt; Previous</button>
        <button className={styles.pageButton + ' ' + styles.active}>1</button>
        <button className={styles.pageButton}>2</button>
        <button className={styles.pageButton}>3</button>
        <button className={styles.pageButton}>Next &gt;</button>
      </div>
    </div>
  );
}
