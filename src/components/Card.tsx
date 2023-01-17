import React from 'react'
import styled from '@emotion/styled'
import { userInfo } from '../sample/sample'

interface Props {}
const Card: React.FC<Props> = () => {
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
        <div style={{ overflow: 'hidden', height: 180 }}></div>
      </Bottom>
    </CardLayout>
  )
}

export default Card

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 360px;
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
  //overflow: hidden;
  //height: 100%;
  padding: 0 40px;
`
const MenuLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`

const Item = styled.div`
  margin: 15px;
`
