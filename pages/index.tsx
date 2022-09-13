import { Col, Row } from 'antd'
import type { NextPage } from 'next'
import About from './About'
import Comment from './Comment'
import Info from './Info'
import List from './List'
import Pricing from './Pricing'
import Related from './Related'
import Title from './Title'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
