import React from 'react'
import styled from '@emotion/styled'

const Main: React.FC = () => {
  return (
    <Layout>
      <div>{process.env.REACT_APP_STATE}</div>
    </Layout>
  )
}

export default Main

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`
