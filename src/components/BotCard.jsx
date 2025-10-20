function BotCard({ bot, onAdd, onRemove, onDischarge, showAdd, showRemove }) {
  const handleAdd = () => onAdd(bot);
  const handleRemove = () => onRemove(bot.id);
  const handleDischarge = () => onDischarge(bot.id);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={bot.avatar_url} alt={bot.name} width="100%" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>

      <div>
        {showAdd && <button onClick={handleAdd}>Enlist</button>}
        {showRemove && <button onClick={handleRemove}>Release</button>}
        <button onClick={handleDischarge}>Delete</button>
      </div>
    </div>
  );
}

export default BotCard;
