import { BrowserRouter as Router, Link } from "react-router-dom";
import CustomLink from "./CustomLink";

/**
 * TODO
 * make more tests
 */
let wrapper;

beforeAll(() => {
  wrapper = mount(
    <Router>
      <CustomLink path="/testPage">Test me</CustomLink>
    </Router>
  );
});

test("renders", () => {
  expect(wrapper).not.toBe(null);
});

test("blocks tags", () => {
  expect(wrapper.find("a")).not.toBe(undefined);
  expect(wrapper.find(".link")).not.toBe(undefined);
});

test("values", () => {
  expect(wrapper.find("a").text()).toBe("Test me");
  expect(wrapper.find("a").props().href).toBe("/testPage");
});

test("CustomLink snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
