import Homepage from "./pages/homePage/Homepage";
import Header from "./components/layouts/header/Header";
function App() {
  return (
    <div className="w-full">    
    <Header />
    <body>
      <main>
           <Homepage />     
      </main>
    </body>
    </div>
  );
}

export default App;
