import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">tickersee</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => (
          <div key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
