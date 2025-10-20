import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy, dischargeBot }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAdd={addToArmy}
          onDischarge={dischargeBot}
          showAdd={true}
        />
      ))}
    </div>
  );
}

export default BotCollection;
