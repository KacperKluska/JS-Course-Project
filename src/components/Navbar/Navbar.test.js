import Navbar from "./Navbar";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Navbar />);
});

test("Navbar snapshot", () => {
  const container = renderer.create(<Navbar />);
  expect(container.toJSON()).toMatchSnapshot();
});
