import React from 'react'
import styled from '@emotion/styled'

interface Props {
  id: number
  value: number
  onClick: (id: number) => void
}
const CheckBox: React.FC<Props> = ({ id, value, onClick }) => {
  return (
    <Layout>
      <div className={'box'} onClick={() => onClick(id)}>
        {id === value && <div className={'icon'} />}
      </div>
      <div>box{id}</div>
    </Layout>
  )
}

export default CheckBox

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
  }
  .icon {
    width: 80%;
    height: 80%;
    border-radius: 4px;
    background: skyblue;
  }
`
