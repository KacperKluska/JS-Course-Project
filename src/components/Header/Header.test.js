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

test("Header snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
