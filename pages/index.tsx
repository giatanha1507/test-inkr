import { Col, Row } from 'antd'
import Layout from 'antd/lib/layout/layout'
import type { NextPage } from 'next'
import About from '../components/About'
import Comment from '../components/Comment'
import Info from '../components/Info'
import ListItem from '../components/ListItem'
import Pricing from '../components/Pricing'
import Related from '../components/Related'
import Title from '../components/Title'
import { useNovel } from '../contexts/NovelContext'
import styles from './index.module.css'

const Home: NextPage = () => {
	const { novel, setNovel } = useNovel()
	console.log(novel)
	return (
		<Layout className={styles.container}>
			<div style={{ 
				// padding: '20px 176px'
				}}>
				<Row gutter={[32, 0]}>
					<Col span={24} lg={15} xl={16}>
						<Title />
						<Pricing />
						<ListItem />
					</Col>
					<Col span={24} lg={9} xl={8}>
						<About />
						<Related />
						<Comment />
						<Info />
					</Col>
				</Row>
			</div>
		</Layout>
	)
}

export default Home
