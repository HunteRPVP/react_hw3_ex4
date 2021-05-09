import "./App.css";

function App() {

  const data = [
    {
      title: "JSX",
      desc: "JSX — расширение языка JavaScript. JSX - это XML-подобное расширение синтаксиса для ECMAScript без какой-либо определенной семантики."
    },
    {
      title: "Компоненты",
      desc: "Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.",
    },
    {
      title: "Пропсы",
      desc: "Props представляет коллекцию значений, которые ассоциированы с компонентом.",
    }
  ]

  const newsCard = ({ title, desc }) => {
    return (
      <div style={{
        boxSizing: 'border-box',
        padding: '10px',
        border: '1px solid black',
        width: '30%',
        borderRadius: '10px'
      }}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <img
        style={{
          maxWidth: "100%",
        }}
        src="https://habrastorage.org/files/3e5/3da/c0f/3e53dac0f1ad421d84310b552058621f.jpg"
        alt="React"
      />
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
      >
        {data.map(props => newsCard(props))}
      </div>
    </div>
  );
}

export default App;
