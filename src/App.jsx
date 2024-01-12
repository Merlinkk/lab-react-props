import "./App.css";
// import imageData from "/src/components/dataCompomnent.jsx";


function App(Data) {
  let imgData = Data.data;
  // code here
  return (
    <>
      <h1>Kalvium Gallary - App.jsx</h1>
      <div className="container">
        {/* use map to traverse throught the array */}
        {imgData.map((e) => {
          return <img key={e.id} src={e.img} alt="" />;
        })}
      </div>
    </>
  );
}

export default App;
