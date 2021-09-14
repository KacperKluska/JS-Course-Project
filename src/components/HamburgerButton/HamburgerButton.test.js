import { shallow, render } from "enzyme";
import renderer from "react-test-renderer";
import HamburgerButton from "./HamburgerButton";

let hidded;
let showed;
let noProps;

beforeAll(() => {
  hidded = shallow(<HamburgerButton trigger="active" />);
  showed = shallow(<HamburgerButton trigger="" />);
  noProps = shallow(<HamburgerButton />);
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
