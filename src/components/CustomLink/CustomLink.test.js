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

test("CustomLink snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
