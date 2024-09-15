import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};
