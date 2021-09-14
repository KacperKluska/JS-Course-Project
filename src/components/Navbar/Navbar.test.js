import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";
import NavItem from "../NavItem/NavItem";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Navbar />);
});

test("checking blocks", () => {
  expect(wrapper.find(".sticky").html()).toContain('<div id="secondNavbar">');
  expect(wrapper.find("#secondNavbar").html()).toContain('<ul id="thirdList">');
});

test("checking list of navitems", () => {
  expect(wrapper.find("NavItem").length).toEqual(5);
  //   wrapper.find("NavItem").forEach((item) => {
  //     expect(item.type()).toBe("NavItem");
  //   });
  /**
   * TODO
   * try to do this with render or mount
   */
  expect(wrapper.find("NavItem").get(0)).toStrictEqual(
    <NavItem>For him</NavItem>
  );
  expect(wrapper.find("NavItem").get(1)).toStrictEqual(
    <NavItem>For her</NavItem>
  );
  expect(wrapper.find("NavItem").get(2)).toStrictEqual(<NavItem>Kids</NavItem>);
  expect(wrapper.find("NavItem").get(3)).toStrictEqual(
    <NavItem>About</NavItem>
  );
  expect(wrapper.find("NavItem").get(4)).toStrictEqual(
    <NavItem>Contact</NavItem>
  );
});

test("Navbar snapshot", () => {
  const container = renderer.create(<Navbar />);
  expect(container.toJSON()).toMatchSnapshot();
});
