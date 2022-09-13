import * as React from 'react';
import styles from '../styles/Home.module.css'
export interface IInfoProps {
}

export default function Info (props: IInfoProps) {
  return (
    <div className={styles['card-background']}>
      Info
    </div>
  );
}
