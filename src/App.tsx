import React, { useContext, useState } from 'react'




// Load components
import EditableInput from './components/EditableInput'
import Input from 'components/Input'
import Button from 'components/Button'
import Tab from 'components/Tab'
import Modal from 'components/Modal'
import Theme from 'components/Theme'
import DatePicker from 'components/DatePicker'
import { ThemeContext } from 'contexts'
import Notification from 'components/Notification'
import { notification } from 'utils/event.utils'
import Menu from 'components/Menu'



const tabComponents = [
  {
    tab: 'products',
    component: <p> Products component </p>
  },
  {
    tab: 'accessories',
    component: <p> Component.. </p>
  }
]

const Toggler = () => {
  const { themeToggler } = useContext(ThemeContext)
  return (
    <button onClick={themeToggler}> Toggle </button>
  )
}

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  const handleUpdate = () => {
    setModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { }

  const handleOpenNotification = () => {
    notification({ position: 'topRight' })
  }

  return (
    <>
      <Menu />
    </>
    // <DatePicker visible={true} />
    // <Theme config={{ theme: 'dark' }}>
    //   <Toggler />
    //   <EditableInput />
    // </Theme>
  )
}

export default App
