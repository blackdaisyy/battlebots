import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove, onDischarge }) {
  const armyStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const emptyStyle = {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    padding: "20px",
  };

  if (army.length === 0) {
    return (
      <div style={emptyStyle}>
        <p>
          No bots in your army yet. Click "ENLIST" on bots below to add them to
          your army.
        </p>
      </div>
    );
  }

  return (
    <div style={armyStyle}>
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRelease={() => onRemove(bot.id)}
          onDischarge={() => onDischarge(bot.id)}
          showEnlist={false}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
