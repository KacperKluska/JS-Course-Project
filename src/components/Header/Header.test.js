import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <Router>
      <Header />
    </Router>
  );
});

test("renders", () => {
  expect(wrapper).not.toBe(null);
});

test("Header snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
