import * as React from 'react';
import styles from '../styles/Home.module.css'
import { UserOutlined, SendOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons'
import { Avatar, Image, Input, Button } from 'antd'

export interface ICommentProps {
}

export default function Comment (props: ICommentProps) {
  return (
    <div className={styles['card-background']}>
			<div className={styles['card-title']}>12 Comment</div>
			<div style={{ display: 'flex', marginBottom: '24px', alignItems: 'flex-start' }}>
				<div>
					<Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
				</div>
				<div style={{ marginLeft: '16px' }}>
					<div style={{ display: 'flex', alignItems:'center' }}>
						<p className={styles['card-desc']} style={{ marginRight: 8, fontSize: 12, lineHeight: '18px' }}>Han Solo</p>
						<span className={styles['card-desc']} style={{ marginRight: 8, fontSize: 11, lineHeight: '18px', color:'#535353' }}>Commented on Chapter 35 • 24 min. ago</span>
					</div>
					<p className={styles['card-desc']} style={{ marginBottom: 16, paddingRight: 48, color:'white' }}>
						I had no idea such a sequel was coming as I thought the show had ended and Kyoto
						Animation took a hard hit from the tragedy but currently 4 episodes in as of writing
						this review, and I love every second of it.
					</p>
					<div style={{ display: 'flex', color: 'white' }}>
						<div style={{ marginRight: 10 }} ><LikeOutlined  /><span className={styles['card-desc']} style={{ marginLeft: 8, fontSize: 12 }}>61</span></div>
						<div style={{ marginRight: 10 }}><CommentOutlined /><span className={styles['card-desc']} style={{ marginLeft: 8, fontSize: 12 }}>12</span></div>
						<div className={styles['card-desc']} style={{ cursor: 'pointer', fontWeight: 500 }}>Reply</div>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<div>
					<Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
				</div>
				<div style={{ marginLeft: '12px' }}>
					<Input
						style={{
							backgroundColor: '#141414',
							borderRadius: 8,
							border: '1px solid #434343',
							width: 290,
							height: 32,
							color: '#ffffff',
							boxSizing: 'border-box',
							outline: 'none',
							marginBottom: '24px',
						}}
						placeholder="Add your comment"
					/>
					<Button
						className={styles['button-text']}
						style={{
							width: 144,
							height: 32,
						}}
						type="primary"
						icon={<SendOutlined />}
					>
						Add Comment
					</Button>
				</div>
			</div>
		</div>
  )
}
