import Footer from "./Footer";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Footer />);
});

test("renders", () => {
  expect(wrapper).not.toBeNull();
});

test("footer text", () => {
  wrapper = shallow(<Footer />);
  expect(wrapper.find("footer").text()).toContain(
    `Copyrigth © Kacper Kluska 2021. JavaScript course`
  );
});

test("footer text", () => {
  wrapper = shallow(<Footer />);
  expect(wrapper.type()).toBe("footer");
});

test("footer text snapshot", () => {
  const component = renderer.create(<Footer />);
  expect(component.toJSON()).toMatchSnapshot();
});
