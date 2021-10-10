import ErrorPage from "./ErrorPage";

let wrapper;

test("ErrorPage snapshot", () => {
  wrapper = mount(
    <ErrorPage errorCode="404 page not found">
      This page doesn't exist. Try to go back.
    </ErrorPage>
  );
  expect(wrapper).toMatchSnapshot();
});
