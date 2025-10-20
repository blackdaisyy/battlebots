import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  if (army.length === 0) {
    return <p>No bots in your army</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRemove={removeFromArmy}
          onDischarge={dischargeBot}
          showRemove={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
