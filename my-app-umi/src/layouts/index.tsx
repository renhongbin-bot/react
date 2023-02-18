import { Link, Outlet } from 'umi';
import styles from './index.less';

// 最外层布局根组件
export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/yjj">User</Link>
        </li>
        <li>
        <Link to="/founs">founs-4s店</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
