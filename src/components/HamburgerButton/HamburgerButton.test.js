import HamburgerButton from "./HamburgerButton";

let hidded;
let showed;
let noProps;

beforeAll(() => {
  hidded = shallow(<HamburgerButton trigger="active" />);
  showed = shallow(<HamburgerButton trigger="" />);
  noProps = shallow(<HamburgerButton />);
});

test("renders", () => {
  expect(hidded).not.toBeNull();
  expect(showed).not.toBeNull();
  expect(noProps).not.toBeNull();
});

test("visibility tests", () => {
  expect(hidded.html()).toEqual(
    '<div class="hamburgerButton hidden"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>'
  );
  expect(showed.html()).toEqual(
    '<div class="hamburgerButton"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>'
  );
  expect(hidded.html()).toContain('"hamburgerButton hidden"');
  expect(showed.html()).toContain('"hamburgerButton"');
});

test("checking blcoks types and nuber", () => {
  expect(hidded.props().children.length).toEqual(3);
  expect(showed.props().children.length).toEqual(3);

  expect(hidded.find(".hamburgerButton").type()).toEqual("div");

  hidded.find(".bar").forEach((node) => {
    expect(node.type()).toEqual("span");
  });
});

test("simulate click", () => {
  let state = "";
  const button = shallow(
    <HamburgerButton
      func={() => {
        state = "active";
      }}
      trigger={state}
    />
  );

  expect(button.find(".hamburgerButton").html()).toContain('"hamburgerButton"');
  button.simulate("click");
  const button2 = shallow(
    <HamburgerButton
      func={() => {
        state = "active";
      }}
      trigger={state}
    />
  );
  expect(button2.find(".hamburgerButton").html()).toContain(
    '"hamburgerButton hidden"'
  );
});

test("simulate click with mock function", () => {
  const spyFunction = jest.fn();
  const wrapper = mount(<HamburgerButton func={spyFunction} trigger="none" />);
  expect(spyFunction).toBeCalledTimes(0);
  wrapper.find(".hamburgerButton").simulate("click");
  expect(spyFunction).toBeCalledTimes(1);
  wrapper.find(".hamburgerButton").simulate("click");
  wrapper.find(".hamburgerButton").simulate("click");
  wrapper.find(".hamburgerButton").simulate("click");
  expect(spyFunction).toBeCalledTimes(4);
});
