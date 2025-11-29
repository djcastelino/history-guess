# 📚 History Guess - Daily History Challenge

A daily puzzle game where you guess historical figures, events, and inventions from 6 progressive clues!

## 🎮 How to Play

- **3-Day Rotation:**
  - Day 1: 👤 Historical Figure (e.g., Albert Einstein, Cleopatra)
  - Day 2: 📜 Historical Event (e.g., Moon Landing, Fall of Berlin Wall)
  - Day 3: 💡 Invention/Discovery (e.g., Printing Press, Penicillin)

- **6 Progressive Clues:** Start vague, get more specific
- **6 Guesses:** Figure it out before you run out!
- **Learn History:** Every answer includes a verified fun fact with source

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Features

- ✅ **50 Curated Puzzles** (17 figures, 17 events, 16 inventions)
- ✅ **3-Type Rotation** (Different category every day!)
- ✅ **Progressive Clues** (Vague → Specific)
- ✅ **Autocomplete Search** (Easy to type answers)
- ✅ **Educational Fun Facts** (Verified sources!)
- ✅ **Stats Tracking** (Overall + by category)
- ✅ **Streak System** (Build your history knowledge!)
- ✅ **Share Results** (Emoji grid like Wordle)
- ✅ **PWA** (Install to home screen!)
- ✅ **Offline Support** (Play anywhere!)

## 🎯 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **PWA:** vite-plugin-pwa
- **Styling:** CSS Modules
- **Storage:** LocalStorage (no backend!)
- **Deployment:** Vercel

## 📁 Project Structure

```
historyguess/
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx          # Game header with type indicator
│  │  ├─ ClueDisplay.tsx     # Progressive clue display
│  │  ├─ GuessInput.tsx      # Autocomplete input
│  │  ├─ GuessList.tsx       # Previous guesses
│  │  ├─ GameOver.tsx        # Win/lose screen with fun facts
│  │  └─ Stats.tsx           # User statistics modal
│  ├─ data/
│  │  └─ puzzles.ts          # 50 puzzles with verified facts
│  ├─ types/
│  │  └─ index.ts            # TypeScript interfaces
│  ├─ utils/
│  │  └─ storage.ts          # LocalStorage + 3-day rotation
│  ├─ App.tsx                # Main game logic
│  └─ main.tsx               # Entry point
├─ public/                   # PWA icons
└─ package.json
```

## 🌍 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
```bash
git init
git add -A
git commit -m "Initial commit - History Guess"
git remote add origin https://github.com/djcastelino/historyguess.git
git push -u origin main
```

2. **Connect to Vercel:**
- Go to vercel.com
- Import repository
- Deploy!

3. **Connect Custom Domain:**
- Add `historyguess.com` in Vercel settings
- Update DNS records at Namecheap

## 🎨 Customization

### Change Colors
Edit `src/components/*.css` files:
- Primary: `#ef4444` (red)
- Accent: `#dc2626` (dark red)

### Add More Puzzles
Edit `src/data/puzzles.ts`:
- Add new figures, events, or inventions
- Include 6 progressive clues
- Add verified fun fact with source

### Change Rotation Logic
Edit `src/utils/storage.ts`:
- Modify `getTodaysPuzzleType()` function
- Current: 3-day cycle (figure → event → invention)

## 📊 Analytics

Stats tracked locally:
- Games played/won
- Current/max streak
- Guess distribution
- Performance by category (figures/events/inventions)

## 🔒 Privacy

- All data stored locally (LocalStorage)
- No backend, no database
- No user tracking
- No cookies

## 📝 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🎉 Credits

Created by Dan Castelino
- Domain: historyguess.com
- Part of the Daily Educational Games portfolio

## 🚀 Future Features

- [ ] Archive mode (play yesterday's puzzle)
- [ ] Difficulty settings
- [ ] More puzzles (expand to 150+)
- [ ] Achievements system
- [ ] Leaderboards
- [ ] Multiple languages

---

**Play daily to learn history! 📚**

