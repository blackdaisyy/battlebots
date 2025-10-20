 # Bot Battlr - React Bot Army Manager

## Project Overview
This is a React application that lets you browse robots and build your own bot army. You can view all available bots, add them to your army, release them, or delete them permanently.

## How It Works

### Main Files:

**App.jsx** - The main controller
 Manages the list of all bots and your army
 Fetches bot data from the server
   Handles adding, removing, and deleting bots

**BotCollection.jsx** - Shows all available bots
 Displays every bot from the server
 Each bot has an "Enlist" button

**YourBotArmy.jsx** - Shows your selected bots
 Displays bots you've added to your army
 Each bot has a "Release" button

**BotCard.jsx** - Displays one bot
 Shows bot image, name, stats, and buttons
 Used in both BotCollection and YourBotArmy

### How the Code Flows:

1. **App loads** Fetches bots from `http://localhost:8001/bots`
2. **BotCollection** receives the bots and displays them
3. **Click "Enlist"** Bot gets added to your army (but stays in collection)
4. **Click "Release"** Bot gets removed from your army
5. **Click "Delete"**  Bot gets deleted from both army and server
