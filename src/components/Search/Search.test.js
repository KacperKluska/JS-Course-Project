import Search from "./Search";

let mountWrapper;

beforeAll(() => {
  mountWrapper = mount(<Search class="active" />);
});

test("simulate click", () => {
  const spyFunction = jest.fn();
  const newWrapper = mount(<Search class="active" func={spyFunction} />);

  expect(spyFunction).toBeCalledTimes(0);
  newWrapper.find(".navItem").simulate("click");
  expect(spyFunction).toBeCalledTimes(1);
  newWrapper.find(".navItem").simulate("click");
  newWrapper.find(".navItem").simulate("click");
  newWrapper.find(".navItem").simulate("click");
  expect(spyFunction).toBeCalledTimes(4);
});

test("Search snapshot, diferent snap test", () => {
  const container = renderer.create(<Search class="active" />);
  const shallowWrapper = shallow(<Search class="active" />);
  const renderWrapper = render(<Search class="active" />);
  expect(container.toJSON()).toMatchSnapshot();
  expect(mountWrapper).toMatchSnapshot();
  expect(shallowWrapper).toMatchSnapshot();
  expect(renderWrapper).toMatchSnapshot();
});
