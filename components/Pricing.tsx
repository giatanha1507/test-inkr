import * as React from 'react';
import { useNovel } from '../contexts/NovelContext';
import styles from '../styles/Home.module.css'


export interface IPricingProps {
}

export default function Pricing (props: IPricingProps) {
  const { novel } = useNovel()
  const freeChapters = novel.chapters.filter(chapter => chapter.unlocked)
  const lockedChapters = novel.chapters.filter(chapter => !chapter.unlocked)
  return (
    <div className={styles['card-background']}>
      <div className={styles['card-title']}>Pricing &amp; Promotion</div>
      <div className={styles['card-title']}>FREE: {freeChapters.length}</div>
      <div className={styles['card-title']}>LOCKED: {lockedChapters.length}</div>
      <div className={styles['card-title']}>TOTAL: {lockedChapters.length * novel.pricePerChap}</div>
      <div className={styles['card-title']}>Test: -{novel.discount * 100 }%</div>
      <div className={styles['card-title']}>DISCOUNT: {Math.ceil(lockedChapters.length * novel.pricePerChap * novel.discount)}</div>
    </div>
  );
}
