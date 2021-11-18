import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { UserContextProvider } from '../../context/UserContext';

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <UserContextProvider>
      <Router>
        <Header />
      </Router>
    </UserContextProvider>,
  );
});

test('Header snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
