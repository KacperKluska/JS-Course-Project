import NavItem from "./NavItem";

let wrapper;

beforeAll(() => {
  wrapper = mount(<NavItem icon="icon-search">Test me</NavItem>);
});

test("simulate click", () => {
  const spyFunction = jest.fn();
  const newWrapper = mount(
    <NavItem icon="icon-search" onClick={spyFunction}>
      Test me
    </NavItem>
  );

  expect(spyFunction).toBeCalledTimes(0);
  newWrapper.find(".navItem").simulate("click");
  expect(spyFunction).toBeCalledTimes(1);
  newWrapper.find(".navItem").simulate("click");
  newWrapper.find(".navItem").simulate("click");
  newWrapper.find(".navItem").simulate("click");
  expect(spyFunction).toBeCalledTimes(4);
});

test("NavItem snapshot", () => {
  const container = renderer.create(
    <NavItem icon="icon-search">Test me</NavItem>
  );
  expect(container.toJSON()).toMatchSnapshot();
});
