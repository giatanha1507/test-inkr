import { Col, Row } from 'antd'
import type { NextPage } from 'next'
import About from '../components/About'
import Comment from '../components/Comment'
import Info from '../components/Info'
import List from '../components/List'
import Pricing from '../components/Pricing'
import Related from '../components/Related'
import Title from '../components/Title'
import { useNovel } from '../contexts/NovelContext'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const { novel, setNovel } = useNovel()
	console.log(novel)
	return (
		<div
			style={{ width: '100vw', height: '100vh', backgroundColor: '#242424', padding: '20px 176px' }}
		>
			<Row gutter={[32, 0]} >
				<Col span={16}>
					<Title />
					<Pricing />
					<List />
				</Col>
				<Col span={8}>
					<About />
					<Related />
					<Comment />
					<Info />
				</Col>
			</Row>
		</div>
	)
}

export default Home
