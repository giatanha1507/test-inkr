import * as React from 'react';
import styles from '../styles/Home.module.css'

export interface IRelatedProps {
}

export default function Related (props: IRelatedProps) {
  return (
    <div className={styles['card-background']}>
      Related
    </div>
  );
}
