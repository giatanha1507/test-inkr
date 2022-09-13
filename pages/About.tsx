import * as React from 'react';
import styles from '../styles/Home.module.css'

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  return (
    <div className={styles['card-background']}>
      About
    </div>
  );
}
