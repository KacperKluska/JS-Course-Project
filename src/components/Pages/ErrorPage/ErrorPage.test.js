import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

let wrapper;

test("ErrorPage snapshot", () => {
  wrapper = mount(
    <BrowserRouter>
      <ErrorPage errorCode="404 page not found">
        This page doesn't exist. Try to go back.
      </ErrorPage>
    </BrowserRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
