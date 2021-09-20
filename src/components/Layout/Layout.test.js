import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
});

test("layout snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
