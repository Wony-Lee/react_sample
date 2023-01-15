import React from 'react'
import styled from '@emotion/styled'
import { userInfo } from '../sample/sample'

interface Props {}
const Card: React.FC<Props> = () => {
  const list = [
    {
      id: 1,
      title: 'sample1',
    },
    {
      id: 2,
      title: 'sample2',
    },
    {
      id: 3,
      title: 'sample3',
    },
    {
      id: 4,
      title: 'sample4',
    },
    {
      id: 5,
      title: 'sample5',
    },
    {
      id: 6,
      title: 'sample6',
    },
  ]
  return (
    <CardLayout>
      <Top>
        <ProfileCircle>
          <img className={'profile_image'} src={`./image/cat.jpg`} alt={'default image'} />
        </ProfileCircle>
        <div className={'userName'}>
          <h1>{userInfo.name}</h1>
        </div>
      </Top>
      <Bottom>
        <MenuLayout>
          {list.map((item) => (
            <Item key={item.id}>{item.title}</Item>
          ))}
        </MenuLayout>
      </Bottom>
    </CardLayout>
  )
}

export default Card

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 400px;
  margin-top: 40px;
  border-radius: 12px;
  background: skyblue;
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  margin-bottom: 30px;
  .userName {
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
`
const ProfileCircle = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  .profile_image {
    width: 100px;
    height: 100px;
  }
`
const Bottom = styled.div`
  //height: 100%;
`
const MenuLayout = styled.div`
  height: 100%;
`

const Item = styled.div`
  margin: 15px;
`
