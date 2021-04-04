import React from 'react'



// Load components
import EditableInput from './components/EditableInput'
import Input from 'components/Input'
import Button from 'components/Button'
import Tab from 'components/Tab'

const tabComponents = [
  {
    tab: 'products',
    component: <p> Products component </p>
  },
  {
    tab: 'accessories',
    component: <p> accessories component </p>
  },
  {
    tab: 'activities',
    component: <p> Products component </p>
  },
  {
    tab: 'employees',
    component: <p> accessories component </p>
  },
  {
    tab: 'products2',
    component: <p> Products component </p>
  },
  {
    tab: 'accessories3',
    component: <p> accessories component </p>
  },
  {
    tab: 'activities4',
    component: <p> Products component </p>
  },
  {
    tab: 'employees5',
    component: <p> accessories component </p>
  },
]

function App() {
  return (
    <div style={{ width: '100vw' }} className='App'>
      <Tab
        tabComponents={tabComponents}
      />
    </div>
  )
}

export default App
