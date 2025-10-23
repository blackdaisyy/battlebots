import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => {
        console.log("Loaded bots:", data);
        setBots(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading bots:", error);
        setLoading(false);
      });
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
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        removeFromArmy(botId);
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  const appStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  };

  const sectionHeaderStyle = {
    color: "#555",
    margin: "30px 0 15px 0",
    paddingBottom: "10px",
    borderBottom: "2px solid #ddd",
  };

  if (loading) {
    return (
      <div style={appStyle}>
        <h1 style={headerStyle}>Bot Battlr</h1>
        <p>Loading bots from server...</p>
      </div>
    );
  }

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>Bot Battlr</h1>
      <h2 style={sectionHeaderStyle}>Your Bot Army</h2>
      <YourBotArmy
        army={army}
        onRemove={removeFromArmy}
        onDischarge={dischargeBot}
      />

      <h2 style={sectionHeaderStyle}>Available Bots</h2>
      <BotCollection
        bots={bots}
        onAddToArmy={addToArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
