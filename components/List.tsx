import * as React from 'react';
import { useNovel } from '../contexts/NovelContext';
import styles from '../styles/Home.module.css'

export interface IListProps {
}



export default function List (props: IListProps) {
  const {novel, setNovel} = useNovel()
  return (
    <div className={styles['card-background']}>
      <div>
        <div className={styles['card-title']}>Last read</div>
      </div>
      <div>
        <ul>
          {
            novel.chapters.map(chapter => <li key={chapter.id}>{chapter.title}</li>)
          }
        </ul>
        <div className={styles['card-title']}>{novel.chapters.length} chapters</div>
      </div>
    </div>
  );
}
