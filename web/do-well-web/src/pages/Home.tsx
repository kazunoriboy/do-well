import '../css/style.scss';
import Sidebar from '../layouts/Sidebar';
import Main from '../layouts/Main';

const Home: React.VFC = () => {
  return (
    <div className="f-wrapper">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
