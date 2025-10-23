import React from "react";

function BotCard({ bot, onEnlist, onRelease, onDischarge, showEnlist }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    background: "white",
    textAlign: "center",
    width: "250px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3px solid #eee",
  };

  const nameStyle = {
    margin: "10px 0",
    color: "#333",
    fontSize: "18px",
  };

  const catchphraseStyle = {
    fontStyle: "italic",
    color: "#666",
    fontSize: "0.9em",
    margin: "10px 0",
    minHeight: "40px",
  };

  const statsStyle = {
    display: "flex",
    justifyContent: "space-around",
    margin: "15px 0",
  };

  const statStyle = {
    background: "#f8f9fa",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
    border: "1px solid #e9ecef",
  };

  const classStyle = {
    margin: "10px 0",
    color: "#555",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "15px",
  };

  const baseButtonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const enlistButtonStyle = {
    ...baseButtonStyle,
    background: "#28a745",
    color: "white",
  };

  const releaseButtonStyle = {
    ...baseButtonStyle,
    background: "#ffc107",
    color: "black",
  };

  const dischargeButtonStyle = {
    ...baseButtonStyle,
    background: "#dc3545",
    color: "white",
  };

  return (
    <div style={cardStyle}>
      <img src={bot.avatar_url} alt={bot.name} style={imageStyle} />
      <h3 style={nameStyle}>{bot.name}</h3>
      <p style={catchphraseStyle}>"{bot.catchphrase}"</p>

      <div style={statsStyle}>
        <span style={statStyle} title="Health">
          {bot.health}
        </span>
        <span style={statStyle} title="Damage">
          {bot.damage}
        </span>
        <span style={statStyle} title="Armor">
          {bot.armor}
        </span>
      </div>

      <p style={classStyle}>Class: {bot.bot_class}</p>

      <div style={buttonContainerStyle}>
        {showEnlist ? (
          <button style={enlistButtonStyle} onClick={onEnlist}>
            ENLIST
          </button>
        ) : (
          <button style={releaseButtonStyle} onClick={onRelease}>
            RELEASE
          </button>
        )}

        <button style={dischargeButtonStyle} onClick={onDischarge}>
          X
        </button>
      </div>
    </div>
  );
}

export default BotCard;
