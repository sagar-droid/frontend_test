import { useState } from "react";
import Cards from "./components/cards/Cards"
import Dropdown from "./components/dropdown/Dropdown"


const App = () => {
  const [selectedCards, setSelectedCards] = useState(5);

  const handleSelectChange = (e: any) => {
    setSelectedCards(parseInt(e.target.value, 10));
  };
  
  return (
    <div className="flex flex-col justify-center w-full">
      <Dropdown onSelectChange={handleSelectChange} />
      <Cards numberOfCards={selectedCards} />
    </div>
  );
};

export default App
