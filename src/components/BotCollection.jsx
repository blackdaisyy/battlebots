import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToArmy, onDischarge }) {
  const collectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  return (
    <div style={collectionStyle}>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={() => onAddToArmy(bot)}
          onDischarge={() => onDischarge(bot.id)}
          showEnlist={true}
        />
      ))}
    </div>
  );
}

export default BotCollection;
