import * as React from 'react';
import styles from '../styles/Home.module.css'


export interface IPricingProps {
}

export default function Pricing (props: IPricingProps) {
  return (
    <div className={styles['card-background']}>
      Pricing
    </div>
  );
}
