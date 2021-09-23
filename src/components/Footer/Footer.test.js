import Footer from "./Footer";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Footer />);
});

test("footer text snapshot", () => {
  const component = renderer.create(<Footer />);
  expect(component.toJSON()).toMatchSnapshot();
});
