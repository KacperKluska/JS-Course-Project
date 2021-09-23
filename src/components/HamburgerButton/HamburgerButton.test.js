import HamburgerButton from "./HamburgerButton";

let hidded;
let showed;
let noProps;

beforeAll(() => {
  hidded = shallow(<HamburgerButton trigger="active" />);
  showed = shallow(<HamburgerButton trigger="" />);
  noProps = shallow(<HamburgerButton />);
});

test("simulate click", () => {
  let state = "";
  const onClick = jest.fn(() => (state = "active"));
  const button = mount(<HamburgerButton onClick={onClick} trigger={state} />);

  expect(button.find(".hamburgerButton").html()).toContain('"hamburgerButton"');
  button.simulate("click");
  const button2 = mount(<HamburgerButton onClick={onClick} trigger={state} />);
  expect(button2.find(".hamburgerButton").html()).toContain(
    '"hamburgerButton hidden"'
  );
});

test("simulate click with mock function", () => {
  const spyFunction = jest.fn();
  const wrapper = mount(
    <HamburgerButton onClick={spyFunction} trigger="none" />
  );
  expect(spyFunction).toBeCalledTimes(0);
  wrapper.find(".hamburgerButton").simulate("click");
  expect(spyFunction).toBeCalledTimes(1);
});
