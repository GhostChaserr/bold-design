import React, { useState } from 'react'




// Load components
import EditableInput from './components/EditableInput'
import Input from 'components/Input'
import Button from 'components/Button'
import Tab from 'components/Tab'

import { Modal } from './components'

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

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  const handleUpdate = () => {
    setTimeout(() => {
      setModalOpen(false)
    }, 2000)
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Modal
        headerText='Edit profile info'
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      >
        <div>
          <EditableInput />
        </div>
        <div>
          <EditableInput />
        </div>
        <div>
          <EditableInput />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button handleClick={handleUpdate} block={true}/> 
        </div>
      </Modal>
    </div>
  )
}

export default App
