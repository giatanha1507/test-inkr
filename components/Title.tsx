import { LikeOutlined, MoreOutlined, ReadOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Button, Image, Tag } from 'antd'
import * as React from 'react'
import styles from '../styles/Home.module.css'

export interface ITitleProps {}

const data = {
  titleName: "Kasane",
  author: "By Kodansha",
  category: "Drama •",
  chapters: "10 Chapters",
  readers: "74,483",
  likes: "15,863",
  tags:["18+", "new", "trending", "bestseller", "manga"]
}

export default function Title(props: ITitleProps) {
	return (
		<div
			style={{ display: 'flex', alignItems: 'flex-start', height: 320 }}
			className={styles['card-background']}
		>
			<div style={{ marginRight: 24 }}>
				<Image
					style={{ borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}
					preview={false}
					width={180}
					height={270}
					src="/images/title.png"
				/>
			</div>
			<div
				style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
						<h1 className={styles['title-story']}>{data.titleName}</h1>
						<p className={styles['card-text']} style={{color:'rgba(255, 255, 255, 0.65)', fontWeight: 400}}>{data.author}</p>
            <div className={styles['card-text']} style={{display:'flex', alignItems:'center', color:'rgba(255, 255, 255, 0.65)', fontWeight: 400}}>
              <p>{data.category}</p>
              <p style={{marginLeft: 4}}>{data.chapters}</p>
            </div>
            <div className={styles['card-text-detail']} style={{display:'flex', alignItems:'center'}} >
              <ReadOutlined />
              <span style={{marginLeft: 4}}>{data.readers}</span>
              <LikeOutlined style={{marginLeft: 16}} />
              <span style={{marginLeft: 4}}>{data.likes}</span>
            </div>
						<div style={{ display: 'flex', marginTop: 25, textTransform: 'uppercase' }}>
							{data.tags.map((tags,index) => <Tag key={index} className={styles['tag-text']}>{tags}</Tag>)}
						</div>
					</div>
					<div style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
						<ShareAltOutlined
							style={{
								padding: 9,
								backgroundColor: '#232323',
								border: '1px solid #434343',
								borderRadius: 8,
								cursor: 'pointer',
							}}
						/>
						<MoreOutlined
							style={{
								marginLeft: 8,
								padding: 9,
								backgroundColor: '#232323',
								border: '1px solid #434343',
								borderRadius: 8,
								cursor: 'pointer',
							}}
						/>
					</div>
				</div>
				<Button
					className={styles['button-text']}
					style={{
						width: 200,
						height: 32,
					}}
					type="primary"
				>
					Read First Chapter for FREE
				</Button>
			</div>
		</div>
	)
}
