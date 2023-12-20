import "./App.css";
import { Header } from "../components/Header";
import { Movies } from "../components/Movies";
import { Slider } from "../components/Slider";

function App() {
  return (
    <>
      <Header />

      <Slider />

      <Movies />
    </>
  );
}

export default App;
