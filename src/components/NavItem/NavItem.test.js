import NavItem from './NavItem';

let wrapper;

beforeAll(() => {
  wrapper = mount(<NavItem icon="icon-search">Test me</NavItem>);
  console.log(wrapper);
});

test('simulate click', () => {
  const spyFunction = jest.fn();
  const newWrapper = mount(
    <NavItem icon="icon-search" onClick={spyFunction}>
      Test me
    </NavItem>,
  );

  expect(spyFunction).toBeCalledTimes(0);
  newWrapper.find('.navItemButton').simulate('click');
  expect(spyFunction).toBeCalledTimes(1);
});

test('NavItem snapshot', () => {
  const container = renderer.create(
    <NavItem icon="icon-search">Test me</NavItem>,
  );
  expect(container.toJSON()).toMatchSnapshot();
});
