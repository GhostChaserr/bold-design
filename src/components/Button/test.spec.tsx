import { render } from '@testing-library/react';
import { BsWifi } from 'react-icons/bs';
import Button from '.';

describe('Testing button component', () => {

  it ('Should render SM button variant', () => {
    const text = 'გარეკანის ფოტოს დამატება'
    const dom = render(
      <Button
        size='sm'
        onClick={() => console.log('Click')}
        text={text}
        variant='white_highlight'
      />
    )
    expect(dom.container.getElementsByClassName('sm').length).toBe(1);
    const textContainer = dom.container.firstChild?.firstChild;
    expect(textContainer?.textContent).toBe(text)
    expect(dom.container.getElementsByClassName('text_container').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it ('Should render MD button variant', () => {
    const text = 'გარეკანი'
    const dom = render(
      <Button
        size='md'
        onClick={() => console.log('Click')}
        text={text}
        variant='white_highlight'
      />
    )
    expect(dom.container.getElementsByClassName('md').length).toBe(1);
    const textContainer = dom.container.firstChild?.firstChild;
    expect(textContainer?.textContent).toBe(text)
    expect(dom.container.getElementsByClassName('text_container').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it ('Should render LG button variant', () => {
    const text = 'Signup'
    const dom = render(
      <Button
        size='lg'
        onClick={() => console.log('Click')}
        text={text}
        variant='white_highlight'
      />
    )
    expect(dom.container.getElementsByClassName('lg').length).toBe(1);
    const textContainer = dom.container.firstChild?.firstChild;
    expect(textContainer?.textContent).toBe(text)
    expect(dom.container.getElementsByClassName('text_container').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it ('Should render with Icon', () => {
    const text = 'Signup'
    const dom = render(
      <Button
        icon={<BsWifi/>}
        size='lg'
        onClick={() => console.log('Click')}
        text={text}
        variant='primary'
      />
    )
    expect(dom.container.getElementsByClassName('lg').length).toBe(1);
    const textContainer = dom.container.firstChild?.lastChild
    expect(textContainer?.textContent).toBe(text)
    expect(dom.container.getElementsByClassName('icon_container').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it ('Should render primary button', () => {
    const text = 'Edit'
    const dom = render(
      <Button
        icon={<BsWifi/>}
        size='lg'
        onClick={() => console.log('Click')}
        text={text}
        variant='primary'
      />
    )
    expect(dom.container.getElementsByClassName('primary').length).toBe(1);
  })

  it ('Should render white highlight button', () => {
    const text = 'Edit'
    const dom = render(
      <Button
        icon={<BsWifi/>}
        size='lg'
        onClick={() => console.log('Click')}
        text={text}
        variant='white_highlight'
      />
    )
    expect(dom.container.getElementsByClassName('white_highlight').length).toBe(1);
  })

  it ('Should render gray highlight button', () => {
    const text = 'Edit'
    const dom = render(
      <Button
        icon={<BsWifi/>}
        size='lg'
        onClick={() => console.log('Click')}
        text={text}
        variant='gray_hightlight'
      />
    )
    expect(dom.container.getElementsByClassName('gray_hightlight').length).toBe(1);
  })
})