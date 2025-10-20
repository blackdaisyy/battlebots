import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then(setBots);
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: "DELETE" }).then(
      () => {
        setArmy(army.filter((bot) => bot.id !== botId));
        setBots(bots.filter((bot) => bot.id !== botId));
      }
    );
  };

  return (
    <div>
      <h1>Bot Battlr</h1>

      <div>
        <h2>Your Bot Army</h2>
        <YourBotArmy
          army={army}
          removeFromArmy={removeFromArmy}
          dischargeBot={dischargeBot}
        />
      </div>

      <div>
        <h2>Available Bots</h2>
        <BotCollection
          bots={bots}
          addToArmy={addToArmy}
          dischargeBot={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
