import { Fragment } from 'react';
import CategoryList from './components/categories/CategoryList';
import Navbar from './components/layout/Navbar';

const App = () => {
  const title = 'Welcome to Workshop JSX F3';
  return (
    <Fragment>
      <Navbar />
      <CategoryList />
    </Fragment>
  );
};

export default App;
