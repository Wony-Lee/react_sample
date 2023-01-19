import React, { useEffect, useState } from 'react'
import CheckBox from '../components/CheckBox'
import styled from '@emotion/styled'
import List from '../components/todo/List'

const checkList = [
  {
    id: 1,
    title: 'test1',
  },
  {
    id: 2,
    title: 'test2',
  },
]

const todoList = [
  {
    id: 1,
    title: '밥 먹기',
    done: false,
  },
  {
    id: 2,
    title: '숨 쉬기',
    done: false,
  },
  {
    id: 3,
    title: '공부하기',
    done: true,
  },
  {
    id: 4,
    title: '귀찮아서 자야겠음',
    done: false,
  },
]

interface Todos {
  id: number
  title: string
  done: boolean
}
const Main = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todos[]>([])
  const [value, setValue] = useState(0)
  const handleCheck = (id: number) => {
    setValue(id)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos((prev) => prev.concat({ id: prev.length + 1, title: text, done: false }))
    setText('')
  }

  useEffect(() => {
    setTodos(todoList)
  }, [])

  return (
    <Layout>
      <div className={'line'}>
        {checkList.map((item) => (
          <CheckBox key={item.id} id={item.id} value={value} onClick={handleCheck} />
        ))}
      </div>
      <form className={'todo'} onSubmit={handleSubmit}>
        <div className={'header'}>할 일</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'calc(100% - 40px)',
          }}
        >
          <List list={todos} />
          <div style={{ display: 'flex', height: 40 }}>
            <input
              style={{ width: '100%', padding: 10, outline: 'none' }}
              maxLength={20}
              name={'todo'}
              onChange={handleChange}
              value={text}
            />
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Main

const Layout = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  height: 400px;
  padding: 20px;
  .line {
    width: 200px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
  }
  .todo {
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
    width: 400px;
    height: 400px;
    margin: 20px;
    border: 1px solid black;
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      font-size: 18px;
      font-weight: bold;
      color: white;
      background: green;
    }
  }
`
