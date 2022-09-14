import styles from '../styles/Home.module.css'
import CardRelated from './Modal/CardRelated'

export interface IRelatedProps {}

const data = [
	{
		id: 0,
		reader: '45.6K reads',
		img: '/images/related.png',
		quality: 'PREQUEL',
		category: 'EXCLUSIVE',
		titleName: 'Title Name 1',
	},
	{
		id: 1,
		reader: '45.6K reads',
		img: '/images/related.png',
		quality: 'PREQUEL',
		category: 'EXCLUSIVE',
		titleName: 'Title Name 2',
	},
	{
		id: 2,
		reader: '45.6K reads',
		img: '/images/related.png',
		quality: 'PREQUEL',
		category: 'EXCLUSIVE',
		titleName: 'Title Name 3',
	},
]

export default function Related(props: IRelatedProps) {
	return (
		<div className={styles['card-background']} style={{ paddingBottom: 8 }}>
			<div className={styles['card-title']}>Related</div>
			<div>
				{data.map((e) => (
					<CardRelated
						key={e.id}
						titleName={e.titleName}
						img={e.img}
						reader={e.reader}
						quality={e.quality}
						category={e.category}
					/>
				))}
			</div>
		</div>
	)
}
