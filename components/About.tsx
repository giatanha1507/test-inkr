import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image, Tag } from 'antd';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'

export interface IAboutProps {
}

const data = {
  tags:[
    'Horror', 'Psychological', 'Seinen'
  ],
  summary:{
    desc:"Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this. Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.",
    img: [
      {
        src: '/images/about1.png',
        atl: '#'
      },
      {
        src: '/images/about2.png',
        atl: '#'
      },
      {
        src: '/images/about3.png',
        atl: '#'
      },
      {
        src: '/images/about4.png',
        atl: '#'
      },
      {
        src: '/images/about5.png',
        atl: '#'
      },
    ]
  },
  credits: [
    {
      id: '0',
      name: 'Kodansha',
      ava: 'https://joeschmoe.io/api/v1/random',
      title: 'Publisher'
    },
    {
      id: '1',
      name: 'Johnnie Christmas',
      title: 'Story'
    },
    {
      id: '2',
      ava: 'https://joeschmoe.io/api/v1/random',
      name: 'Jack T. Cole',
      title: 'Art'
    }
  ],
  facts: [
    {
      info:'Last Updated',
      content:'2 days ago'
    },
    {
      info:'Age Rating',
      content:'Mature (18+)'
    },
    {
      info:'Color',
      content:'Black & White'
    },
    {
      info:'Origin Media',
      content:'Print'
    },
    {
      info:'Style Origin',
      content:'Japanese Comics (Manga)'
    },
    {
      info:'Copyright',
      content:'© Daruma Matsuura / Kodansha Ltd.'
    },
    {
      info:'Other Names',
      content:'Kasane -voleuse de visage'
    },
  ]
}




export default function About (props: IAboutProps) {
  const [show, setShow] = useState<boolean>(true)

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className={styles['card-background']}>
      <div className={styles['card-title']}>About</div>
      <div style={{paddingBottom: 20}}>
        <p className={styles['card-text']} style={{paddingBottom: 8}}>Genres</p>
        <div style={{display: 'flex'}}>
          {
            data.tags.map((tag, index) => <Tag className={styles['tag-text']} key={index}>{tag}</Tag>)
          }
        </div>
      </div>
      <div style={{paddingBottom: 12}}>
        <p className={styles['card-text']} style={{paddingBottom: 8}}>Summary</p>
        <p className={show ? styles['card-desc-truncate'] : styles['card-desc']}>
          {data.summary.desc}
				</p>
      </div>
      {show ?
        <div onClick={handleShow} style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
          <p className={styles['card-desc']}>Show More</p>
        </div> :
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 20}}>
            {data.summary.img.map((img, index) => <Image style={{borderRadius: '4px', border:'1px solid rgba(255, 255, 255, 0.1)'}} key={index} width={85} height={126} src={img.src} />)}
          </div>
          <div style={{paddingBottom: 20}}>
          <p className={styles['card-text']} style={{paddingBottom: 8}}>Credits</p>
          {
            data.credits.map((credits) => 
            <div key={credits.id} style={{display: 'flex', marginBottom: 14, alignItems: 'center'}}>
              {credits.ava ? <Avatar style={{width: 40, height: 40, marginRight: 15}} src={<Image preview={false} src={credits.ava} style={{ width: 40 }} />} /> 
              : <Avatar style={{width: 40, height: 40, marginRight: 15, backgroundColor: '#87d068'}} icon={<UserOutlined />} />}
                <div>
                  <p className={styles['card-desc']} style={{color:'rgba(255, 255, 255, 0.85)', opacity: 1}}>{credits.name}</p>
                  <p className={styles['card-desc']}>{credits.title}</p>
                </div>
            </div>
            )
          }
          </div>
          <div>
            <p className={styles['card-text']} style={{paddingBottom: 8}}>Other Facts</p>
            {data.facts.map((facts) => 
              <div key={facts.info} style={{ display: 'flex', alignItems: 'flex-end'}}>
                <div className={styles['card-desc']} style={{ display: 'flex', width: 100, marginRight: 8, alignItems:'center', justifyContent: 'space-between', color:'rgba(255, 255, 255, 0.45)'}}>
                  <p>{facts.info}</p>
                  <span>&#58;</span>
                </div>
                <p className={styles['card-desc']} style={{color:'rgba(255, 255, 255, 0.85)'}}>{facts.content}</p>
            </div>
            )}
          </div>
        </div>
        }
    </div>
  );
}
