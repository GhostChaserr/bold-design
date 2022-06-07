import './components/theme.css'
import { Avatar, Card, Button } from 'components'
import { BsWifi } from 'react-icons/bs'


const App = () => {
  return (
    <>
      <Card variant='withPadding'>
        <Avatar 
          size='lg'
          source=''
          isActive={false}
        />
      </Card>
      <Card>
        <Button
          icon={<BsWifi/>}
          size='sm'
          onClick={() => console.log('Click')}
          text='გარეკანის ფოტოს დამატება'
          variant='white_highlight'
        />
        <Button
          icon={<BsWifi/>}
          size='sm'
          onClick={() => console.log('Click')}
          text='დამატება'
          variant='white_highlight'
        />
        <Button
          icon={<BsWifi/>}
          size='sm'
          onClick={() => console.log('Click')}
          text='რეგისტრაცია'
          variant='white_highlight'
        />
      </Card>
      <Card>
        <Button
          icon={<BsWifi/>}
          size='md'
          text='შესვლა'
          onClick={() => console.log('Click')}
          variant='gray_hightlight'
        />
        <Button
          icon={<BsWifi/>}
          size='md'
          text='დამატება'
          onClick={() => console.log('Click')}
          variant='gray_hightlight'
        />
        <Button
          icon={<BsWifi/>}
          size='md'
          onClick={() => console.log('Click')}
          text='პროფილის რედაქტირება'
          variant='gray_hightlight'
        />
      </Card>
      <Card>
        <Button
          onClick={() => console.log('Click')}
          icon={<BsWifi/>}
          size='lg'
          text='პროფილის რედაქტირება'
          variant='primary'
        />
        <Button
          onClick={() => console.log('Click')}
          icon={<BsWifi/>}
          size='lg'
          text='დამატება'
          variant='primary'
        />
        <Button
          onClick={() => console.log('Click')}
          icon={<BsWifi/>}
          size='lg'
          text='სისტემაშ შესვლა'
          variant='primary'
        />
      </Card>
    </>
  )
}

export default App