import React from 'react'
import styled from '@emotion/styled'
import Todo from './Todo'

export interface Item {
  id: number
  title: string
  done: boolean
}
interface Props {
  list: Item[]
}
const List: React.FC<Props> = ({ list }) => {
  return (
    <Layout>
      {list.map((item) => (
        <Todo
          key={item.id}
          style={
            item.done
              ? {
                  color: '#ddd',
                  textDecoration: 'line-through',
                }
              : {}
          }
        >
          {item.title}
        </Todo>
      ))}
    </Layout>
  )
}

export default List

const Layout = styled.div`
  overflow-x: scroll;
  max-height: 360px;
  box-sizing: border-box;
`
