import { CatsList } from './components/CatsList/CatsList';

function App() {
  const cats = [
    {
      id: '1',
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      width: 1200,
      height: 800,
    },
    {
      id: '2',
      url: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
      width: 1200,
      height: 800,
    },
    {
      id: '3',
      url: 'https://cdn2.thecatapi.com/images/9l5.jpg',
      width: 1200,
      height: 800,
    },
    {
      id: '4',
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      width: 1200,
      height: 800,
    },
    {
      id: '5',
      url: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg',
      width: 1200,
      height: 800,
    },
    {
      id: '6',
      url: 'https://cdn2.thecatapi.com/images/9l5.jpg',
      width: 1200,
      height: 800,
    },
  ];

  return (
    <div className="container">
      <CatsList cats={cats} />
    </div>
  );
}

export default App;
