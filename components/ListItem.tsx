import {
	BellOutlined,
	DollarCircleFilled,
	LockFilled,
	SortAscendingOutlined,
} from '@ant-design/icons'
import { Image, List, Progress } from 'antd'
import { useNovel } from '../contexts/NovelContext'
import styles from '../styles/Home.module.css'

export interface IListProps {}

export default function ListItem(props: IListProps) {
	const { novel, setNovel } = useNovel()
	return (
		<div className={styles['card-background']}>
			<div>
				<div className={styles['card-title']}>Last read</div>
				<List
					style={{ paddingBottom: 16 }}
					dataSource={novel.chapters}
					renderItem={(item) =>
						item.progress && (
							<List.Item style={{ borderBottom: 0 }} key={item.id}>
								<div style={{ position: 'relative' }}>
									<List.Item.Meta
										style={{ alignItems: 'center' }}
										avatar={
											<Image
												width={78}
												height={62}
												preview={false}
												style={{ borderRadius: 4 }}
												src={item.thumbnail}
											/>
										}
										title={
											<a
												className={styles['comment-text']}
												style={{ color: 'rgba(255, 255, 255, 0.65)' }}
												href="#"
											>
												{item.title}
											</a>
										}
										description={
											<p
												style={{
													fontSize: 12,
													lineHeight: '20px',
													fontWeight: 400,
													color: 'rgba(255, 255, 255, 0.45)',
												}}
											>
												Last read 2 days ago
											</p>
										}
									/>
									{item.progress ? (
										<Progress
											strokeLinecap={'square'}
											style={{ position: 'absolute', width: 78, bottom: -5 }}
											strokeColor="yellow"
											percent={item.progress}
											showInfo={false}
										/>
									) : (
										''
									)}
								</div>
							</List.Item>
						)
					}
				/>
			</div>
			<div>
				<div
					style={{
						display: 'flex',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<div className={styles['card-title']}>{novel.chapters.length} chapters</div>
						<p className={styles['comment-text']} style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
							New chapter every Thursday{' '}
						</p>
					</div>
					<div
						style={{ display: 'flex', alignItems: 'center', color: 'rgba(255, 255, 255, 0.85)' }}
					>
						<BellOutlined
							style={{
								padding: 9,
								backgroundColor: 'transparent',
								border: '1px solid #434343',
								borderRadius: 8,
								cursor: 'pointer',
							}}
						/>
						<SortAscendingOutlined
							style={{
								marginLeft: 8,
								padding: 9,
								backgroundColor: 'transparent',
								border: '1px solid #434343',
								borderRadius: 8,
								cursor: 'pointer',
							}}
						/>
					</div>
				</div>
				<List
					dataSource={novel.chapters}
					renderItem={(item) => (
						<List.Item style={{ borderBottom: 0 }} key={item.id}>
							<div style={{ position: 'relative' }}>
								<List.Item.Meta
									style={{ alignItems: 'center' }}
									avatar={
										<Image
											width={78}
											height={62}
											preview={false}
											style={{ borderRadius: 4 }}
											src={item.thumbnail}
										/>
									}
									title={
										<a
											className={styles['comment-text']}
											style={{ color: 'rgba(255, 255, 255, 0.65)' }}
											href="#"
										>
											{item.title}
										</a>
									}
								/>
								{item.progress ? (
									<Progress
										strokeLinecap={'square'}
										style={{ position: 'absolute', width: 78, bottom: -5 }}
										strokeColor="yellow"
										percent={item.progress}
										showInfo={false}
									/>
								) : (
									''
								)}
								{!item.unlocked ? (
									<>
										{' '}
										<LockFilled
											style={{
												position: 'absolute',
												padding: 9,
												backgroundColor: 'white',
												border: '1px solid #434343',
												borderRadius: 50,
												cursor: 'pointer',
												zIndex: 1,
												left: 24,
												top: 12.5,
											}}
										/>
										<div
											style={{
												width: 78,
												height: 62,
												backgroundColor: 'black',
												position: 'absolute',
												top: 0,
												opacity: 0.5,
											}}
										></div>{' '}
									</>
								) : (
									''
								)}
							</div>
							<div
								className={styles['comment-text']}
								style={{ color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase' }}
							>
								{item.unlocked ? (
									'FREE'
								) : (
									<DollarCircleFilled style={{ color: 'gold', marginRight: 4 }} />
								)}
							</div>
						</List.Item>
					)}
				/>
			</div>
		</div>
	)
}
