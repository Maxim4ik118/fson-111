import List from './components/list/List';
import Message from './components/message/Message';

const App = () => {
  const author = 'Вальдемар';
  const isOnline = false;
  const isLoading = true;
  const age = 17;

  const filmsData = [
    {
      id: 2,
      title: 'GoT',
    },
    {
      id: 3,
      title: 'Spiderman',
    },
    {
      id: 4,
      title: 'Batman',
    },
  ];
  const goodsData = [
    {
      id: 2,
      title: 'Potato',
    },
    {
      id: 2,
      title: 'Carrots',
    },
    {
      id: 3,
      title: 'Iphone',
    },
    {
      id: 4,
      title: 'TV',
    },
  ];
  return (
    <div>
      {isOnline && <h2>Online</h2>}

      <List title='Movies' data={filmsData} />
      <List title='Goods' data={goodsData} />
    </div>
  );
};
export default App;
