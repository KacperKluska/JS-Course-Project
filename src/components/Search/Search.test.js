import renderer from "react-test-renderer";
import NavItem from "../NavItem/NavItem";
import Search from "./Search";

let mountWrapper;

beforeAll(() => {
  mountWrapper = mount(<Search class="active" />);
});

test("renders", () => {
  expect(mountWrapper).not.toBe(null);
});

test("test block tags", () => {
  expect(mountWrapper.find("#search").type()).toBe("div");
  expect(mountWrapper.find("#searchInput").type()).toBe("input");
  console.log(mountWrapper.find("#searchInput").props());
  expect(mountWrapper.find(NavItem)).not.toBe(undefined);
});

test("values tests", () => {
  expect(mountWrapper.find("#searchInput").props().placeholder).toBe(
    "Search..."
  );
  expect(mountWrapper.find(NavItem).text()).toBe("Close");
});

test("Search snapshot, diferent snap test", () => {
  const container = renderer.create(<Search class="active" />);
  const shallowWrapper = shallow(<Search class="active" />);
  const renderWrapper = render(<Search class="active" />);
  expect(container.toJSON()).toMatchSnapshot();
  expect(mountWrapper).toMatchSnapshot();
  expect(shallowWrapper).toMatchSnapshot();
  expect(renderWrapper).toMatchSnapshot();
});
