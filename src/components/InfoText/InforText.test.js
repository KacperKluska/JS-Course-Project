import InfoText from "./InfoText";

let wrapper;

beforeAll(() => {
  wrapper = shallow(
    <InfoText title="Test title">Some test text to be printed</InfoText>
  );
});

test("InfoText snapshot", () => {
  const component = renderer.create(
    <InfoText title="Some title">Some placeholder text given</InfoText>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
