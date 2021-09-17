import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Layout from "./Layout";

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
});

test("renders", () => {
  expect(wrapper).not.toBe(null);
  expect(wrapper.find(Header)).not.toBe(null);
  expect(wrapper.find(Navbar)).not.toBe(undefined);
  expect(wrapper.find(Search)).not.toBe(undefined);
  expect(wrapper.find(Footer)).not.toBe(undefined);
});

test("layout snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});
