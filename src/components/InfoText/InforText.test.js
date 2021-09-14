import { shallow, render } from "enzyme";
import renderer from "react-test-renderer";
import InfoText from "./InfoText";

let wrapper;

beforeAll(() => {
  wrapper = shallow(
    <InfoText title="Test title">Some test text to be printed</InfoText>
  );
});

test("type test", () => {
  expect(wrapper.type()).toBe("section");
});

test("title tests", () => {
  expect(wrapper.find("header").html()).toContain("<h1>");
  expect(wrapper.find("header").text()).toBe("Test title");
});

test("text test", () => {
  expect(wrapper.find("div").text()).toBe("Some test text to be printed");
});

test("InfoText snapshot", () => {
  const component = renderer.create(
    <InfoText title="Some title">Some placeholder text given</InfoText>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
