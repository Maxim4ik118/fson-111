import Container from "./components/Container/Container";
import List from "./components/list/List";
import Message from "./components/message/Message";

import goodsData from "./db/goodsData.json";

const App = () => {
  const author = "Вальдемар";
  const isOnline = false;
  const isLoading = true;
  const age = 17;

  const filmsData = [
    {
      id: 2,
      title: "GoT",
    },
    {
      id: 3,
      title: "Spiderman",
    },
    {
      id: 4,
      title: "Batman",
    },
  ];

  return (
    <div>
      <Container>Hello, FSON 111🎉</Container>

      <Container title="Movies section">
        <List title="Movies" data={filmsData} />
      </Container>
      <Container title="Goods section">
        <List title="Goods" data={goodsData} variant="bordered" />
      </Container>
    </div>
  );
};
export default App;
