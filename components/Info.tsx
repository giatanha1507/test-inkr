import { Image } from 'antd'
import styles from '../styles/Home.module.css'
export interface IInfoProps {}

export default function Info(props: IInfoProps) {
	return (
		<div className={styles['card-background']}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div style={{ marginRight: 12.5, paddingRight: 12.5 }}>
					<p className={styles['card-text']}>Get The App</p>
					<p className={styles['card-desc']}>
						Love this title? Scan the QR code to continue reading right on your mobile devices.
					</p>
				</div>
				<div>
					<Image preview={false} width={116} height={116} src="/images/qrcode.png" />
				</div>
			</div>
		</div>
	)
}
