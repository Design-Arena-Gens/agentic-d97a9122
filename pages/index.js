import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formation, setFormation] = useState('4-3-3');
  const [players, setPlayers] = useState([
    { id: 1, name: 'Goalkeeper', position: 'GK', number: 1 },
    { id: 2, name: 'Right Back', position: 'RB', number: 2 },
    { id: 3, name: 'Center Back', position: 'CB', number: 4 },
    { id: 4, name: 'Center Back', position: 'CB', number: 5 },
    { id: 5, name: 'Left Back', position: 'LB', number: 3 },
    { id: 6, name: 'Midfielder', position: 'CM', number: 6 },
    { id: 7, name: 'Midfielder', position: 'CM', number: 8 },
    { id: 8, name: 'Midfielder', position: 'CM', number: 10 },
    { id: 9, name: 'Right Winger', position: 'RW', number: 7 },
    { id: 10, name: 'Striker', position: 'ST', number: 9 },
    { id: 11, name: 'Left Winger', position: 'LW', number: 11 }
  ]);

  const updatePlayer = (id, field, value) => {
    setPlayers(players.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const formations = {
    '4-3-3': [
      { pos: 'GK', top: '85%', left: '50%' },
      { pos: 'RB', top: '65%', left: '75%' },
      { pos: 'CB', top: '70%', left: '60%' },
      { pos: 'CB', top: '70%', left: '40%' },
      { pos: 'LB', top: '65%', left: '25%' },
      { pos: 'CM', top: '50%', left: '60%' },
      { pos: 'CM', top: '45%', left: '50%' },
      { pos: 'CM', top: '50%', left: '40%' },
      { pos: 'RW', top: '20%', left: '70%' },
      { pos: 'ST', top: '15%', left: '50%' },
      { pos: 'LW', top: '20%', left: '30%' }
    ],
    '4-4-2': [
      { pos: 'GK', top: '85%', left: '50%' },
      { pos: 'RB', top: '65%', left: '75%' },
      { pos: 'CB', top: '70%', left: '60%' },
      { pos: 'CB', top: '70%', left: '40%' },
      { pos: 'LB', top: '65%', left: '25%' },
      { pos: 'RM', top: '45%', left: '75%' },
      { pos: 'CM', top: '50%', left: '60%' },
      { pos: 'CM', top: '50%', left: '40%' },
      { pos: 'LM', top: '45%', left: '25%' },
      { pos: 'ST', top: '20%', left: '60%' },
      { pos: 'ST', top: '20%', left: '40%' }
    ],
    '3-5-2': [
      { pos: 'GK', top: '85%', left: '50%' },
      { pos: 'CB', top: '70%', left: '65%' },
      { pos: 'CB', top: '70%', left: '50%' },
      { pos: 'CB', top: '70%', left: '35%' },
      { pos: 'RM', top: '50%', left: '80%' },
      { pos: 'CM', top: '50%', left: '60%' },
      { pos: 'CM', top: '45%', left: '50%' },
      { pos: 'CM', top: '50%', left: '40%' },
      { pos: 'LM', top: '50%', left: '20%' },
      { pos: 'ST', top: '20%', left: '60%' },
      { pos: 'ST', top: '20%', left: '40%' }
    ]
  };

  const fieldPositions = formations[formation];

  return (
    <>
      <Head>
        <title>Football Team Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={styles.container}>
        <h1 style={styles.title}>⚽ Football Team Manager</h1>

        <div style={styles.controls}>
          <label style={styles.label}>
            Formation:
            <select
              value={formation}
              onChange={(e) => setFormation(e.target.value)}
              style={styles.select}
            >
              <option value="4-3-3">4-3-3</option>
              <option value="4-4-2">4-4-2</option>
              <option value="3-5-2">3-5-2</option>
            </select>
          </label>
        </div>

        <div style={styles.field}>
          {players.map((player, index) => {
            const position = fieldPositions[index];
            return (
              <div
                key={player.id}
                style={{
                  ...styles.player,
                  top: position.top,
                  left: position.left
                }}
              >
                <div style={styles.playerCircle}>
                  <span style={styles.playerNumber}>{player.number}</span>
                </div>
                <div style={styles.playerName}>{player.name}</div>
              </div>
            );
          })}
        </div>

        <div style={styles.roster}>
          <h2 style={styles.rosterTitle}>Squad Roster</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>No.</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Position</th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <tr key={player.id} style={styles.tr}>
                  <td style={styles.td}>
                    <input
                      type="number"
                      value={player.number}
                      onChange={(e) => updatePlayer(player.id, 'number', e.target.value)}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => updatePlayer(player.id, 'name', e.target.value)}
                      style={styles.inputName}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="text"
                      value={player.position}
                      onChange={(e) => updatePlayer(player.id, 'position', e.target.value)}
                      style={styles.input}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  controls: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#34495e'
  },
  select: {
    marginLeft: '10px',
    padding: '8px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #3498db',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  field: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    height: '800px',
    margin: '0 auto 30px',
    background: 'linear-gradient(to bottom, #2ecc71 0%, #27ae60 100%)',
    borderRadius: '10px',
    border: '3px solid #fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundImage: `
      linear-gradient(to bottom, transparent 49%, rgba(255,255,255,0.3) 49%, rgba(255,255,255,0.3) 51%, transparent 51%),
      radial-gradient(circle at 50% 50%, transparent 80px, rgba(255,255,255,0.3) 80px, rgba(255,255,255,0.3) 82px, transparent 82px)
    `,
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'center center'
  },
  player: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 10
  },
  playerCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    border: '3px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    margin: '0 auto 5px'
  },
  playerNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  playerName: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '3px 8px',
    borderRadius: '3px',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#2c3e50',
    whiteSpace: 'nowrap',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
  },
  roster: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  rosterTitle: {
    color: '#2c3e50',
    marginBottom: '15px',
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    borderBottom: '2px solid #2980b9'
  },
  tr: {
    borderBottom: '1px solid #ecf0f1'
  },
  td: {
    padding: '10px'
  },
  input: {
    width: '50px',
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    fontSize: '14px'
  },
  inputName: {
    width: '200px',
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    fontSize: '14px'
  }
};
