import EmailButton from "./EmailButton";

let wrapper;

beforeEach(() => {
  wrapper = mount(<EmailButton />);
});

test("EmailButton snapshot with click simulated", () => {
  expect(wrapper).toMatchSnapshot();
  wrapper.find(".emailButton").simulate("click");
  expect(wrapper).toMatchSnapshot();
  wrapper.find(".icon-cancel").simulate("click");
  expect(wrapper).toMatchSnapshot();
});
