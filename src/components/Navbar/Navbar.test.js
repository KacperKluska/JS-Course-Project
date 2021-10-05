import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

let wrapper;

beforeAll(() => {
  wrapper = shallow(
    <Router>
      <Navbar />
    </Router>
  );
});

test("Navbar snapshot", () => {
  const container = renderer.create(
    <Router>
      <Navbar />
    </Router>
  );
  expect(container.toJSON()).toMatchSnapshot();
});
