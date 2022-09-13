import * as React from 'react';
import styles from '../styles/Home.module.css'

export interface IListProps {
}

export default function List (props: IListProps) {
  return (
    <div className={styles['card-background']}>
      List
    </div>
  );
}
