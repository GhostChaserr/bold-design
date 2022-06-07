import Avatar from './index'
import { render, cleanup } from '@testing-library/react';

describe('Avatar Component', () => {
  afterEach(cleanup);
  it('Should render avatar component with Small Size', () => {
    const dom = render(<Avatar size="sm" source="" isActive={false} />);
    expect(dom.container.getElementsByClassName('sm').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it('Should render avatar component with Medium Size', () => {
    const dom = render(
      <Avatar size="md" source="" isActive={false} />
    )
    expect(dom.container.getElementsByClassName('md').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it('Should render avatar component with Large Size', () => {
    const dom = render(
      <Avatar size="lg" source="" isActive={false} />
    )
    expect(dom.container.getElementsByClassName('lg').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it('Should render avatar component with active state', () => {
    const dom = render(
      <Avatar size="md" source="" isActive={true} />
    )
    expect(dom.container.getElementsByClassName('active').length).toBe(1);
    expect(dom.container.getElementsByClassName('active_dot').length).toBe(1);
    expect(dom).toMatchSnapshot()
  })

  it('Should render avatar component with default state', () => {
    const dom = render(
      <Avatar size="md" source="" isActive={false} />
    )
    expect(dom.container.getElementsByClassName('active_dot').length).toBe(0);
    expect(dom).toMatchSnapshot()
  })
})
