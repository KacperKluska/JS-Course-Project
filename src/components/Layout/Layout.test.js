import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { UserContextProvider } from '../../context/UserContext';

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <UserContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </UserContextProvider>,
  );
});

test('layout snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
