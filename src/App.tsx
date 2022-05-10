import {
  Card,
  Text,
  SubText,
  Button,
  TouchableHighLight,
  Avatar,
  Space,
  TextInput,
  Devider
} from 'components'
import './components/theme.css'

const TestCard = () => {
  return (
    <div style={{ width: '350px', padding: '50px' }}>
      <Card>
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
      </Card>
      <Card>
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Button text="დადასტურება" variant="primary" />
        <Button text="დადასტურება" variant="highlight" />
      </Card>
      <Card>
        <TouchableHighLight onClick={() => console.log('On Click')}>
          <Text size='normal' text="მეგობრები" />
        </TouchableHighLight>
        <TouchableHighLight onClick={() => console.log('Clicking')}>
          <Text size='normal' text="marketplace" />
        </TouchableHighLight>
        <TouchableHighLight onClick={() => console.log('Clicking')}>
          <Text size='normal' text="ჯგუფები" />
        </TouchableHighLight>
      </Card>
      <Card>
        <TouchableHighLight onClick={() => console.log('Clicking')}>
          <Space
            height={50}
            justify="flex-start"
            align="center"
            direction="horisontal"
          >
            <Avatar margin="0 15px 0 0" source="" size="md" isActive={true} />
            <Text size='normal' text="ჯგუფები" />
          </Space>
        </TouchableHighLight>
      </Card>
      <Card>
        <Space
          height={60}
          justify="flex-start"
          align="center"
          direction="horisontal"
        >
          <Avatar margin="0 5px 0 0" source="" size="md" isActive={true} />
          <TextInput
            placeholder={`What's on your mind, George ?`}
            disabled={true}
            onClick={() => console.log('On Input Click')}
            onChange={(text) => console.log('text')}
          />
        </Space>
        <Devider />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Devider />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <Text size='normal' text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის კატა მამა unknown, ნაღდი კახელი კია ეგ ვიცი დანამდვილებით. შვილი რა გამოვიდა მაგას თქვენც ნაცავთ 2-3 კვირაში 😃😃💜" />
        <SubText text="ვინმეს ხომ არ გინდათ სიამის კატის კნუტი? ლოკაცია კახეთი. დედა ნაღდი სიამის" />
      </Card>
      <Card>
        <Text 
          cssProperties={{ marginLeft: '10px' }}
          size='lg' 
          text="შესავალი" 
        />
        <Button block={true} text="შესავალის რედაქტირება" variant="highlight" />
      </Card>
    </div>
  )
}

export default TestCard
