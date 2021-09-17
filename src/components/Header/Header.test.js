import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <Router>
      <Header />
    </Router>
  );
});

test("renders", () => {
  expect(wrapper).not.toBe(null);
});

test("NavItems text", () => {
  //   console.log(wrapper.find(".navItem").get(0).props.children[1]);
  expect(wrapper.find(".navItem").at(0).text()).toBe("Sign in");
  expect(wrapper.find(".navItem").at(1).text()).toBe("Register");
  expect(wrapper.find(".navItem").at(2).text()).toBe("Search");
  expect(wrapper.find(".navItem").at(3).text()).toBe("Gift Certificate");
  expect(wrapper.find(".navItem").at(4).text()).toBe("Cart");
});

test("CustomLink paths", () => {
  //   console.log(wrapper.find(".link").at(0).text());
  //   console.log(wrapper.find(".link").at(3).text());
  expect(wrapper.find(".link").get(0).props.to).toBe("/login");
  expect(wrapper.find(".link").get(3).props.to).toBe("/register");
  expect(wrapper.find(".link").get(6).props.to).toBe("/");
});

test("logo", () => {
  expect(wrapper.find("#logo").text()).toBe("SuitUp");
});

test("Header snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
