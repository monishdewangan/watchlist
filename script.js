// ============================================================================
// Monish’s Watchlist — Clean, Simple & Fast (10/10 Cinephile Edition)
// ============================================================================

const CATEGORIES = [
  { id: 'anime', name: 'Anime Series', color: '#f472b6' },
  { id: 'animem', name: 'Anime Movies', color: '#a78bfa' },
  { id: 'movies', name: 'Movies', color: '#e0b33a' },
  { id: 'mseries', name: 'Movie Series', color: '#38bdf8' },
  { id: 'web', name: 'Web Series', color: '#34d399' },
  { id: 'kdrama', name: 'K-Dramas', color: '#fb923c' }
];

const SEED_DATA = {
  anime: {
    w: `One Piece (1999)
Hunter x Hunter (2011)
Hajime no Ippo (2000)
Naruto (2002)
Fullmetal Alchemist: Brotherhood (2009)
Death Note (2006)
Kuroko’s Basketball (2012)
Attack on Titan (2013)
Your Lie in April (2014)
Haikyuu!! (2014)
Black Clover (2017)
Demon Slayer: Kimetsu no Yaiba (2019)
Jujutsu Kaisen (2020)
Blue Lock (2022)
Solo Leveling (2024)`,
    t: `Frieren: Beyond Journey's End (2023)
Steins;Gate (2011)
Monster (2004)
Code Geass (2006)
Vinland Saga (2019)
Cowboy Bebop (1998)
Mob Psycho 100 (2016)
Clannad + Clannad: After Story (2007)
Kaguya-sama: Love Is War (2019)
Neon Genesis Evangelion (1995)
March Comes in Like a Lion (2016)
The Apothecary Diaries (2023)
Violet Evergarden (2018)
Dr. Stone (2019)
Run with the Wind (2018)`
  },
  animem: {
    w: ``,
    t: `Spirited Away (2001)
Your Name (2016)
Princess Mononoke (1997)
Grave of the Fireflies (1988)
A Silent Voice (2016)
Howl's Moving Castle (2004)
Akira (1988)
Perfect Blue (1997)
Ghost in the Shell (1995)
Wolf Children (2012)`
  },
  movies: {
    w: `The Shawshank Redemption (1994)
Forrest Gump (1994)
Inception (2010)
Interstellar (2014)
Parasite (2019)
Se7en (1995)
Oppenheimer (2023)
The Social Network (2010)
Titanic (1997)`,
    t: `Fight Club (1999)
City of God (2002)
Saving Private Ryan (1998)
The Departed (2006)
Whiplash (2014)
The Prestige (2006)
Gladiator (2000)
Life Is Beautiful (1997)
The Pianist (2002)
Memento (2000)
Eternal Sunshine of the Spotless Mind (2004)
Inglourious Basterds (2009)
Django Unchained (2012)
American History X (1998)
The Green Mile (1999)
WALL-E (2008)
Good Will Hunting (1997)
Oldboy (2003)
The Usual Suspects (1995)
3 Idiots (2009)
Mulholland Drive (2001)
The Lives of Others (2006)
No Country for Old Men (2007)
There Will Be Blood (2007)
Coco (2017)
Memories of Murder (2003)
Pan's Labyrinth (2006)
Prisoners (2013)
Shutter Island (2010)
Heat (1995)
Moonlight (2016)
Mad Max: Fury Road (2015)
The Truman Show (1998)
Her (2013)
Arrival (2016)
In the Mood for Love (2000)
One Battle After Another (2025)
Sinners (2025)
Get Out (2017)
1917 (2019)
Children of Men (2006)
Zodiac (2007)
Blade Runner 2049 (2017)
La La Land (2016)
Everything Everywhere All at Once (2022)
Joker (2019)
Requiem for a Dream (2000)
American Beauty (1999)
Braveheart (1995)
Taare Zameen Par (2007)
Dangal (2016)
A Separation (2011)
Downfall (2004)
The Hunt (2012)
Incendies (2010)
Capernaum (2018)
Portrait of a Lady on Fire (2019)
Yi Yi (2000)
Burning (2018)
Shoplifters (2018)
Lost in Translation (2003)
The Handmaiden (2016)
Black Swan (2010)
Let the Right One In (2008)
Ex Machina (2014)
Nightcrawler (2014)
Gone Girl (2014)
The Wolf of Wall Street (2013)
Up (2009)
Amélie (2001)
Past Lives (2023)
Anatomy of a Fall (2023)
The Father (2020)
The Zone of Interest (2023)
Roma (2018)
Train to Busan (2016)
The Big Short (2015)
The Hurt Locker (2008)
Another Round (2020)
Gravity (2013)
Fargo (1996)
Trainspotting (1996)
Casino (1995)
L.A. Confidential (1997)
Snatch (2000)
The Sixth Sense (1999)
Catch Me If You Can (2002)
A Beautiful Mind (2001)
Top Gun: Maverick (2022)
Godzilla Minus One (2023)
Ford v Ferrari (2019)
Hacksaw Ridge (2016)
The Grand Budapest Hotel (2014)
Spotlight (2015)
Three Billboards Outside Ebbing, Missouri (2017)
Finding Nemo (2003)
Inside Out (2015)
12th Fail (2023)
Project Hail Mary (2026)
Sentimental Value (2025)`
  },
  mseries: {
    w: `The Lord of the Rings Trilogy (2001-2003)
The Dark Knight Trilogy (2005-2012)
The Matrix (1999-2021)
Star Wars: Original Trilogy (1977-1983)
Harry Potter (2001-2011)
Marvel Cinematic Universe: Infinity Saga (2008-2019)
Mission: Impossible (1996-2025)
John Wick (2014-2023)
Jurassic Park (1993-2025)
Back to the Future Trilogy (1985-1990)
Indiana Jones (1981-2023)
Baahubali (2015-2017)`,
    t: `Toy Story (1995-2026)
Spider-Man: Spider-Verse (2018-2023)
Dune (2021-2024)
The Before Trilogy (1995-2013)
Kill Bill (2003-2004)
The Bourne Series (2002-2016)
James Bond: Daniel Craig Era (2006-2021)
Planet of the Apes Reboot Trilogy (2011-2017)
How to Train Your Dragon (2010-2019)
Infernal Affairs Trilogy (2002-2003)`
  },
  web: {
    w: `Breaking Bad (2008-2013)
Game of Thrones (2011-2019)
Chernobyl (2019)
Stranger Things (2016-2025)
Money Heist (2017-2021)`,
    t: `Band of Brothers (2001)
Fleabag (2016-2019)
The Wire (2002-2008)
Dark (2017-2020)
Better Call Saul (2015-2022)
Arcane (2021-2024)
The Sopranos (1999-2007)
Shogun (2024-)
Succession (2018-2023)
Black Mirror (2011-)`
  },
  kdrama: {
    w: ``,
    t: `Reply 1988 (2015)
Crash Landing on You (2019)
My Mister (2018)
When Life Gives You Tangerines (2025)
Signal (2016)
Goblin (2016)
Move to Heaven (2021)
Stranger (Secret Forest) (2017)
The Glory (2022-2023)
Hospital Playlist (2020-2021)`
  }
};

const STORAGE_KEY = 'monish-watchlist-v1';
const THEME_KEY = 'monish-watchlist-v1-t';
const MIGRATION_KEY = 'monish-watchlist-to-watch-v2';

let state = {
  items: [],
  view: 0,       // 0: To Watch, 1: Already Watched
  tab: 'all',    // Active category id ('all' or specific category)
  sort: 'o'      // Sort option
};

let itemCounter = 0;

// Helper: Create item object
function makeItem(categoryId, rawText, isWatched, rank = 0) {
  const match = rawText.match(/^(.*?)(?:\s*\((.*?)\))?$/);
  const title = match && match[1] ? match[1].trim() : rawText.trim();
  const year = match && match[2] ? match[2].trim() : '';
  return {
    id: 'i' + (itemCounter++),
    c: categoryId,
    t: title,
    y: year,
    d: isWatched ? 1 : 0,
    r: 0,
    o: itemCounter,
    k: rank || 0
  };
}

// Seed all default titles
function seed() {
  state.items = [];
  itemCounter = 0;
  CATEGORIES.forEach(cat => {
    const data = SEED_DATA[cat.id];
    if (!data) return;
    if (data.w) {
      data.w.split('\n').filter(Boolean).forEach(line => {
        state.items.push(makeItem(cat.id, line, 1));
      });
    }
    if (data.t) {
      data.t.split('\n').filter(Boolean).forEach((line, idx) => {
        state.items.push(makeItem(cat.id, line, 0, idx + 1));
      });
    }
  });
}

// Save state to localStorage
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

// Load state with migration to update to-watch and preserve watched titles
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const hasMigrated = localStorage.getItem(MIGRATION_KEY);

    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.items) && parsed.items.length) {
        state = parsed;
        if (!state.tab) state.tab = 'all';
        itemCounter = state.items.length + 1000;

        // Auto-migrate: replace to-watch list with the new final ranked list while keeping already-watched
        if (!hasMigrated) {
          const watchedItems = state.items.filter(i => i.d === 1);
          const newToWatchItems = [];
          CATEGORIES.forEach(cat => {
            const data = SEED_DATA[cat.id];
            if (!data || !data.t) return;
            data.t.split('\n').filter(Boolean).forEach((line, idx) => {
              newToWatchItems.push(makeItem(cat.id, line, 0, idx + 1));
            });
          });

          state.items = [...watchedItems, ...newToWatchItems];
          save();
          localStorage.setItem(MIGRATION_KEY, 'true');
        }
        return;
      }
    }
  } catch (e) {}
  seed();
  save();
  try {
    localStorage.setItem(MIGRATION_KEY, 'true');
  } catch (e) {}
}

// HTML escape helper
function esc(str) {
  return String(str || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

function getCategoryColor(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  return cat ? cat.color : '#818cf8';
}

function getCategoryName(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  return cat ? cat.name : 'All';
}

function clearSurprise() {
  const banner = document.getElementById('surpriseBanner');
  if (banner) banner.innerHTML = '';
}

// Switch between To Watch (0) and Already Watched (1)
function setView(v) {
  state.view = v;
  clearSurprise();
  save();
  render();
}

// Switch Category Tab
function setTab(tabId) {
  state.tab = tabId;
  clearSurprise();
  save();
  render();
}

// Theme Toggle
function initTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {}
}

// Quick Add Title
function addItem() {
  const input = document.getElementById('addInput');
  const val = input.value.trim();
  if (!val) return;

  const targetCategory = state.tab === 'all' ? 'movies' : state.tab;
  const item = makeItem(targetCategory, val, state.view);
  item.o = itemCounter + 10000;
  state.items.push(item);
  input.value = '';
  save();
  render();
}

// Surprise Me Picker
function surprise() {
  const pool = state.items.filter(i => (state.tab === 'all' || i.c === state.tab) && !i.d);
  const banner = document.getElementById('surpriseBanner');
  
  if (!pool.length) {
    banner.innerHTML = `
      <div class="surprise-box">
        <span>🎉 You've watched everything here! Time to add more titles.</span>
        <button class="btn" onclick="clearSurprise()">Dismiss</button>
      </div>
    `;
    return;
  }

  const pick = pool[Math.floor(Math.random() * pool.length)];
  const trailerQuery = encodeURIComponent(pick.t + ' ' + (pick.y || '') + ' trailer');

  banner.innerHTML = `
    <div class="surprise-box">
      <div>
        <div class="surprise-meta">Tonight’s pick · ${getCategoryName(pick.c)}${pick.k ? ` (Priority #${pick.k})` : ''}</div>
        <div class="surprise-title">${esc(pick.t)} <span class="surprise-meta">${esc(pick.y)}</span></div>
      </div>
      <div class="surprise-actions">
        <button class="btn btn-primary" onclick="toggleWatched('${pick.id}')">✓ Mark Watched</button>
        <button class="btn" onclick="surprise()">🎲 Another</button>
        <a class="btn" href="https://www.youtube.com/results?search_query=${trailerQuery}" target="_blank" rel="noopener">▶ Trailer</a>
      </div>
    </div>
  `;
}

// Toggle item Watched status
function toggleWatched(id) {
  const item = state.items.find(x => x.id === id);
  if (!item) return;
  item.d = item.d ? 0 : 1;
  if (!item.d) item.r = 0; // reset rating if moved back to To Watch
  
  clearSurprise();
  save();
  render();
}

// Interactive Star Ratings with Live Hover
function setRating(id, rating) {
  const item = state.items.find(x => x.id === id);
  if (!item) return;
  item.r = item.r === rating ? 0 : rating;
  save();
  render();
}

function hoverStars(itemId, score) {
  for (let s = 1; s <= 5; s++) {
    const el = document.getElementById(`star_${itemId}_${s}`);
    if (el) el.className = `star ${s <= score ? 'active' : ''}`;
  }
}

function resetStars(itemId, currentRating) {
  for (let s = 1; s <= 5; s++) {
    const el = document.getElementById(`star_${itemId}_${s}`);
    if (el) el.className = `star ${s <= currentRating ? 'active' : ''}`;
  }
}

// Delete item
function deleteItem(id) {
  const item = state.items.find(x => x.id === id);
  if (!item) return;
  if (!confirm(`Remove “${item.t}”?`)) return;
  state.items = state.items.filter(x => x.id !== id);
  save();
  render();
}

// Clear Search
function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  render();
  input.focus();
}

// Main Render Function
function render() {
  const items = state.items;
  const watched = items.filter(i => i.d);
  const rated = watched.filter(i => i.r > 0);
  const avg = rated.length ? (rated.reduce((a, b) => a + b.r, 0) / rated.length).toFixed(1) + ' ★' : '—';
  const pct = items.length ? Math.round((watched.length / items.length) * 100) : 0;

  // Header progress
  document.getElementById('progressText').textContent = 
    `Finished ${watched.length} of ${items.length} titles (${pct}%) · Avg rating: ${avg}`;

  // 4 Stats
  document.getElementById('statsGrid').innerHTML = [
    [watched.length, 'Watched'],
    [items.length - watched.length, 'To watch'],
    [pct + '%', 'Completed'],
    [avg, 'Avg rating']
  ].map(s => `
    <div class="stat-card">
      <span class="stat-value">${s[0]}</span>
      <span class="stat-label">${s[1]}</span>
    </div>
  `).join('');

  // Category Tabs (with "🌟 All" tab)
  const allTotal = items.length;
  const allWatched = watched.length;
  const allPct = allTotal ? (allWatched / allTotal) * 100 : 0;
  const isAllActive = state.tab === 'all' ? 'active' : '';

  let catsHtml = `
    <button class="cat-btn ${isAllActive}" style="--cat-color: #818cf8" onclick="setTab('all')">
      <div class="cat-title-row">
        <span>🌟 All</span>
        <span class="cat-count">${allWatched}/${allTotal}</span>
      </div>
      <div class="cat-progress">
        <div class="cat-progress-fill" style="width:${allPct}%;"></div>
      </div>
    </button>
  `;

  catsHtml += CATEGORIES.map(cat => {
    const catItems = items.filter(i => i.c === cat.id);
    const catWatched = catItems.filter(i => i.d).length;
    const catPct = catItems.length ? (catWatched / catItems.length) * 100 : 0;
    const isActive = state.tab === cat.id ? 'active' : '';

    return `
      <button class="cat-btn ${isActive}" style="--cat-color:${cat.color}" onclick="setTab('${cat.id}')">
        <div class="cat-title-row">
          <span>${cat.name}</span>
          <span class="cat-count">${catWatched}/${catItems.length}</span>
        </div>
        <div class="cat-progress">
          <div class="cat-progress-fill" style="width:${catPct}%;"></div>
        </div>
      </button>
    `;
  }).join('');

  document.getElementById('categoriesBar').innerHTML = catsHtml;

  // Segment Buttons
  document.getElementById('viewToWatch').className = state.view === 0 ? 'active' : '';
  document.getElementById('viewWatched').className = state.view === 1 ? 'active' : '';

  // Quick Add Placeholder
  const currentCatName = state.tab === 'all' ? 'Watchlist' : getCategoryName(state.tab);
  document.getElementById('addInput').placeholder = 
    `Add to ${state.view ? 'Already Watched' : 'To Watch'} · ${currentCatName}…`;

  // Search & Sort Filter
  const q = (document.getElementById('searchInput').value || '').trim().toLowerCase();
  document.getElementById('clearSearchBtn').style.display = q ? 'block' : 'none';

  const sortVal = document.getElementById('sortSelect').value;
  state.sort = sortVal;

  let list = items.filter(i => (state.tab === 'all' || i.c === state.tab) && i.d === state.view);
  if (q) {
    list = list.filter(i => i.t.toLowerCase().includes(q) || (i.y && i.y.toLowerCase().includes(q)));
  }

  // Sorting
  list.sort((a, b) => {
    if (sortVal === 'y-desc') return (parseInt(b.y) || 0) - (parseInt(a.y) || 0);
    if (sortVal === 'y-asc') return (parseInt(a.y) || 0) - (parseInt(b.y) || 0);
    if (sortVal === 't-asc') return a.t.localeCompare(b.t);
    if (sortVal === 't-desc') return b.t.localeCompare(a.t);
    if (sortVal === 'r-desc') return (b.r || 0) - (a.r || 0);
    // Curated order: priority rank first (k), then insertion order (o)
    if (a.k && b.k) return a.k - b.k;
    if (a.k) return -1;
    if (b.k) return 1;
    return a.o - b.o;
  });

  // Render Cards Grid
  const listEl = document.getElementById('itemsList');
  if (!list.length) {
    listEl.innerHTML = `<div class="empty-msg">Nothing here yet.</div>`;
    return;
  }

  listEl.innerHTML = list.map(item => {
    const initial = esc(item.t.replace(/^The\s+/i, '').charAt(0).toUpperCase());
    const catColor = getCategoryColor(item.c);
    const catName = getCategoryName(item.c);
    const trailerQuery = encodeURIComponent(item.t + ' ' + (item.y ? item.y.substring(0, 4) : '') + ' trailer');

    // Interactive Stars HTML with hover effects (if in Watched view)
    let starsHtml = '';
    if (item.d) {
      starsHtml = `<div class="stars" onmouseleave="resetStars('${item.id}', ${item.r})" title="${item.r ? item.r + ' / 5 stars' : 'Click to rate'}">`;
      for (let s = 1; s <= 5; s++) {
        starsHtml += `<span class="star ${s <= item.r ? 'active' : ''}" 
          id="star_${item.id}_${s}" 
          onmouseenter="hoverStars('${item.id}', ${s})" 
          onclick="setRating('${item.id}', ${s})">★</span>`;
      }
      starsHtml += '</div>';
    }

    return `
      <div class="card" style="--cat-color:${catColor};">
        <div class="card-avatar" title="${catName}">${initial}</div>
        <div class="card-info">
          <a class="card-title" href="https://www.youtube.com/results?search_query=${trailerQuery}" target="_blank" rel="noopener" title="Watch trailer on YouTube">
            ${esc(item.t)}
          </a>
          <div class="card-meta">
            <span>${esc(item.y)}</span>
            ${state.tab === 'all' ? ` · <span style="color:${catColor};font-weight:600;">${catName}</span>` : ''}
            ${item.k ? ` · <span class="rank-tag">Priority #${item.k}</span>` : ''}
            <a class="trailer-pill" href="https://www.youtube.com/results?search_query=${trailerQuery}" target="_blank" rel="noopener" title="Watch trailer on YouTube">
              ▶ Trailer
            </a>
          </div>
        </div>
        <div class="card-actions">
          ${starsHtml}
          <div class="card-btns">
            <button class="card-btn" onclick="toggleWatched('${item.id}')">${item.d ? '↩' : '✓ Watched'}</button>
            <button class="card-btn card-btn-delete" onclick="deleteItem('${item.id}')" aria-label="Delete" title="Remove title">✕</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Backup Modal Handlers
function openBackup() {
  const dlg = document.getElementById('backupDialog');
  if (dlg && dlg.showModal) dlg.showModal();
}

function closeBackup() {
  const dlg = document.getElementById('backupDialog');
  if (dlg && dlg.close) dlg.close();
}

function exportData() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', `monish_watchlist_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function importData(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && Array.isArray(data.items) && data.items.length) {
        state = data;
        save();
        render();
        closeBackup();
        alert(`Successfully imported ${data.items.length} titles!`);
      } else {
        alert('Invalid backup file.');
      }
    } catch (err) {
      alert('Error parsing file.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function resetToDefaults() {
  if (confirm('Reset your watchlist back to the default titles? All current ratings and changes will be reset.')) {
    seed();
    save();
    render();
    closeBackup();
  }
}

// Startup
initTheme();
load();
render();
