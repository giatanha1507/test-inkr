import { CrownFilled, DollarCircleFilled } from '@ant-design/icons'
import { Card, Col, Row, Tag } from 'antd'
import * as React from 'react'
import { useNovel } from '../contexts/NovelContext'
import styles from '../styles/Home.module.css'

export interface IPricingProps {}

export default function Pricing(props: IPricingProps) {
	const { novel } = useNovel()
	const freeChapters = novel.chapters.filter((chapter) => chapter.unlocked)
	const lockedChapters = novel.chapters.filter((chapter) => !chapter.unlocked)
	return (
		<div className={styles['card-background']}>
			<div className={styles['card-title']}>Pricing &amp; Promotion</div>
			<Row>
				<Col span={12}>
					<Card
						style={{
							padding: 16,
							height: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#1f1f1f',
							border: '1px solid #141414',
              borderRadius: '8px 0 0 0'
						}}
						hoverable={false}
					>
						<p className={styles['comment-text']} style={{textTransform:'uppercase', color:'rgba(255, 255, 255, 0.45)'}}>free</p>
						<p className={styles['card-text']}>{freeChapters.length}&thinsp;chapters</p>
					</Card>
				</Col>
				<Col span={12}>
					<Card
						style={{
							padding: 16,
							height: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#1f1f1f',
							border: '1px solid #141414',
              borderRadius: '0 8px 0 0'
						}}
						hoverable={false}
					>
						<p  className={styles['comment-text']} style={{textTransform:'uppercase', color:'rgba(255, 255, 255, 0.45)'}}>locked</p>
						<div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
							<p className={styles['card-text']}>{lockedChapters.length}&thinsp;chapters</p>&thinsp;
							<span className={styles['comment-text']} style={{color:'rgba(255, 255, 255, 0.45)'}}>
								(<DollarCircleFilled style={{color:'gold'}}/> {novel.pricePerChap} / chapter)
							</span>
						</div>
					</Card>
				</Col>
			</Row>
			<Row style={{ width: '100%' }}>
				<Col span={24}>
					<Card
						extra={
							<Tag style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'8px 16px', borderRadius: 8, marginRight: 0,backgroundColor:'#2f2f2f', border: 'none'}}>
								<DollarCircleFilled style={{color: 'gold', marginRight: 4}}/>
                <p className={styles['card-text']} style={{fontWeight: 700}}>{lockedChapters.length * novel.pricePerChap}</p>
							</Tag>
						}
						style={{
							padding: 16,
							height: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#1f1f1f',
							border: '1px solid #141414',
							flexDirection: 'row-reverse',
						}}
						hoverable={false}
					>
						<p className={styles['card-text']}>Total Price</p>
						<p className={styles['comment-text']} style={{color:'rgba(255, 255, 255, 0.45)'}}>Instant access to all chapters • No Ad</p>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Card
            extra={<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Tag style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'8px 16px', borderRadius: '8px 0 0 8px', marginRight: 0, backgroundColor:'#651fff', border: 'none'}}>
              <p style={{fontSize: 20, lineHeight:'26px', fontWeight: 500, color:'rgba(255, 255, 255, 0.85)'}}>-{novel.discount * 100 }%</p>
              </Tag>
              <Tag style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'8px 16px', borderRadius: '0 8px 8px 0', marginRight: 0, backgroundColor:'#2f2f2f', border: 'none'}}>
                <DollarCircleFilled style={{color: 'gold', marginRight: 4}} />
                <p className={styles['comment-text']} style={{color:'rgba(255, 255, 255, 0.45)',  marginRight: 4, textDecorationLine:'line-through'}}>{lockedChapters.length * novel.pricePerChap}</p>
                <p className={styles['card-text']} style={{fontWeight: 700}}>{Math.ceil(lockedChapters.length * novel.pricePerChap * novel.discount)}</p>
              </Tag>
              </div>
            }
						style={{
							padding: 16,
							height: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: '#1f1f1f',
							border: '1px solid #141414',
              flexDirection: 'row-reverse',
              borderRadius: '0 0 8px 8px'
						}}
						hoverable={false}
					>
						<p className={styles['card-text']} style={{color:'#A379FF'}}>Save money with INKR Extra<CrownFilled style={{paddingLeft: 4}}/></p>
						<p className={styles['comment-text']} style={{color:'rgba(255, 255, 255, 0.45)'}}>Instant access to all chapters • No Ad •  Extra saving</p>
					</Card>
				</Col>
			</Row>
      <p className={styles['comment-text']} style={{display: 'flex', alignItems:'center', justifyContent:'center', color:'rgba(255, 255, 255, 0.45)', paddingTop: 16, cursor: 'pointer'}}>Want to read for free? Learn more </p>
		</div>
	)
}
