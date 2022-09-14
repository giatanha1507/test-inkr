import * as React from 'react';
import { Card } from 'antd';
import styles from '../../styles/Home.module.css'
import { CrownFilled } from '@ant-design/icons';

interface ICardRelatedProps {
    img: string,
    titleName: string,
    category: string,
    quality: string,
    reader: string
}

const { Meta } = Card;

export default function CardRelated (props: ICardRelatedProps) {
  return (
    <a href="#">
        <Card  style={{display: 'flex', alignItems:'center', backgroundColor: 'transparent', border:'none', marginBottom:'16px', paddingBottom: '16px', borderBottom:'1px solid rgba(255, 255, 255, 0.12)'}}  cover={<img style={{ width: 80, height: 120, border: '1.25px solid rgba(255, 255, 255, 0.12)', borderRadius: 10, boxSizing: 'border-box', marginRight: 24}} src={props.img} />}>
            <p className={styles['card-text']}>{props.titleName}</p>
            <p className={styles['card-desc']} style={{textTransform:'uppercase', color:'#844cff', fontWeight:700}}><CrownFilled style={{paddingRight: 4}}/>{props.category}</p>
            <p className={styles['card-desc']} style={{textTransform:'uppercase'}}>{props.quality}</p>
            <p className={styles['card-desc']}>{props.reader}</p>
        {/* Meta not receiving CSS */}
        {/* <Meta title="a"/>
        <Meta style={{color:'white'}} description="a"/>
        <Meta description="b"/>
        <Meta description="c"/> */}
        </Card>
    </a>
    
  );
}
