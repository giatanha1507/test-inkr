import * as React from 'react';
import styles from '../styles/Home.module.css'

export interface ICommentProps {
}

export default function Comment (props: ICommentProps) {
  return (
    <div className={styles['card-background']}>
      Comment
    </div>
  );
}
