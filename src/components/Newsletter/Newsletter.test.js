import Newsletter from "./Newsletter";

let wrapper;
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((init) => [init, setState]);

beforeEach(() => {
  wrapper = mount(<Newsletter />);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("simulate click", () => {
  // const spyFunction = jest.fn();
  console.log(wrapper.find("button"));
  wrapper
    .find("input")
    .simulate("change", { target: { value: "test@gmail.com" } });
  //   wrapper.find(".newsletterButton").simulate("click");
  //   expect(setState).toHaveBeenCalledWith("test@gmail.com");
});

test("Newsletter snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
