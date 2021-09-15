import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import NavItem from "./NavItem";

let wrapper;

beforeAll(() => {
  wrapper = mount(<NavItem icon="icon-search">Test me</NavItem>);
});

test("renders", () => {
  expect(wrapper).not.toBeNull();
});

test("test blocks tags", () => {
  expect(wrapper.find(".navItem").type()).toBe("li");
  expect(wrapper.find(".icon-search").type()).toBe("i");
});

test("navItem value test", () => {
  expect(wrapper.find(".navItem").text()).toBe("Test me");
  expect(wrapper.find(".icon-search")).not.toBeNull();
});

test("NavItem snapshot", () => {
  const container = renderer.create(
    <NavItem icon="icon-search">Test me</NavItem>
  );
  expect(container.toJSON()).toMatchSnapshot();
});
