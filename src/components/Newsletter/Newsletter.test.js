import Newsletter from "./Newsletter";

let wrapper;
const setState = jest.fn();

beforeEach(() => {
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);
  wrapper = shallow(<Newsletter />);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("simulate click", () => {
  wrapper
    .find("input")
    .simulate("change", { target: { value: "test@gmail.com" } });
  wrapper.find(".newsletterButton").simulate("click");
  expect(setState).toHaveBeenCalledWith("test@gmail.com");
});

test("Newsletter snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
