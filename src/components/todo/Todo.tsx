import React from 'react'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  style: React.CSSProperties
}
const Todo: React.FC<Props> = ({ children, style }) => {
  return <Layout style={style}>{children}</Layout>
}

export default Todo

const Layout = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-of-type {
  }
`
