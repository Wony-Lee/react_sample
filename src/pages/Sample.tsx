import React from 'react'
import styled from '@emotion/styled'
import Card from '../components/Card'

const Sample: React.FC = () => {
  return (
    <Layout>
      <Card />
    </Layout>
  )
}

export default Sample

const Layout = styled.div`
  display: flex;
  //align-items: center;
  justify-content: center;
  max-width: 1028px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: black;
`
