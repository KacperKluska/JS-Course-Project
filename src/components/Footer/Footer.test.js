import { shallow, render } from "enzyme";
import renderer from "react-test-renderer";
import Footer from "./Footer";

test("footer text", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find("footer").text()).toContain(
    `Copyrigth © Kacper Kluska 2021. JavaScript course`
  );
});

test("footer text", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.type()).toBe("footer");
});

test("footer text snapshot", () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
