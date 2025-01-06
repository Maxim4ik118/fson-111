import Message from './components/message/Message';

const App = () => {
  const author = 'Вальдемар';
  const isOnline = false;
  const isLoading = true;
  const age = 17;
  return (
    <div>
      {isOnline && <h2>Online</h2>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h2>Вітаю тебе у клубі дорослих! </h2> : <h2>Йди їж кашу!</h2>}

      <Message author={author} text='Продам холодильник' />
      <Message author='Петро' text='Продам шоколад' />
      <Message author='Марина' text='Продам плейстейшн' />
    </div>
  );
};
export default App;
