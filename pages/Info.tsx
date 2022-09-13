import { Image } from 'antd';
import * as React from 'react';
import styles from '../styles/Home.module.css'
import qrcode from '../images/qrcode.png' 
export interface IInfoProps {
}

export default function Info (props: IInfoProps) {
  console.log({qrcode});
  
  return (
    <div className={styles['card-background']}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{marginRight: 12.5, paddingRight: 12.5}}>
          <p>Get The App</p>
          <p>Love this title? Scan the QR code to continue reading right on your mobile devices.</p>
        </div>
        <Image
          height={116} 
          width={116} 
          preview={false} 
          
        />
      </div>
    </div>
  );
}
