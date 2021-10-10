import Sectionlogo from "./SectionLogo";

let wrapper;

test("SectionLogo snapshot", () => {
  wrapper = mount(<Sectionlogo>Test logo!</Sectionlogo>);
  expect(wrapper).toMatchSnapshot();
});
