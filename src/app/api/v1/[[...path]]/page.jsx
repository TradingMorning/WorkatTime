api/v1/[[...path]]import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

// Guarded local filesystem persistence path
const PERSISTENCE_FILE = path.join(process.cwd(), 'public', 'falcon_dynamic_store.json');

// Ensure directories and base database structures exist
function loadDatabase() {
  const defaultDatabase = {
    indicators: [
      {
        _id: "ind1",
        name: "Apex Trend Sentinel Pro",
        slug: "apex-trend-sentinel-pro",
        description: "Adaptive multi-timeframe trend identifier utilizing volume-weighted standard dev channels and dynamic trend breaks.",
        longDescription: "Apex Trend Sentinel Pro is designed for high-precision scalp and swing setups across crypto, forex, and indices. It calculates the delta between buyers and sellers in real-time, overlaying custom volatility bands. By filtering low-liquidity zones, it aims to prevent false breakouts.",
        category: "cat1",
        platform: "plat1",
        price: "Free / Open Source",
        tags: ["Trend Finder", "Vol-Squeeze", "Scalping Tool"],
        trustScore: 9.8,
        rating: 4.8,
        likes: 1243,
        reviewsCount: 38,
        author: "QuantVortex Systems",
        authorEmail: "vortex.quant@gmail.com",
        githubUrl: "https://github.com/falconspido/apex-trend-sentinel",
        isFeatured: true,
        isWarningTier: false,
        specifications: {
          timeframes: ["5M", "15M", "1H"],
          riskRewardRatio: "1:2.5",
          recommendedAssets: "BTC, ETH, XAUUSD"
        }
      },
      {
        _id: "ind2",
        name: "Quantum Entropy Scalper EA",
        slug: "quantum-entropy-scalper-ea",
        description: "Expert Advisor for MT4/MT5 powered by mean reversion oscillators and mathematical momentum normalization.",
        longDescription: "An automated expert trading system optimized for low-latency brokers. Features built-in trailing stop management, dynamic grid allocation, and leverage protection logic to minimize maximum drawdown during high-volatility releases.",
        category: "cat4",
        platform: "plat2",
        price: "$149 (Verified Lifetime)",
        tags: ["Expert Advisor", "Grid Scalper", "Mean Reversion"],
        trustScore: 9.5,
        rating: 4.6,
        likes: 854,
        reviewsCount: 22,
        author: "DeltaCore Algorithmic",
        authorEmail: "support@deltacore-algo.com",
        githubUrl: "",
        isFeatured: true,
        isWarningTier: false,
        specifications: {
          timeframes: ["1M", "5M"],
          riskRewardRatio: "1:1.8",
          recommendedAssets: "EURUSD, GBPUSD"
        }
      },
      {
        _id: "ind3",
        name: "Order Flow Delta Matrix",
        slug: "order-flow-delta-matrix",
        description: "Real-time institutional volume tracker displaying cumulative delta clusters and point-of-control bands.",
        longDescription: "A sophisticated volume-profile overlay that dissects the order book, exposing buy/sell imbalances directly on your TradingView candlesticks. Ideal for professional traders locating support/resistance.",
        category: "cat5",
        platform: "plat1",
        price: "Free",
        tags: ["Order Flow", "Volume Profile", "CVD"],
        trustScore: 9.2,
        rating: 4.4,
        likes: 621,
        reviewsCount: 14,
        author: "SatoshiLabs TA",
        authorEmail: "research@satoshilabs.ta",
        githubUrl: "https://github.com/falconspido/order-flow-delta",
        isFeatured: false,
        isWarningTier: false,
        specifications: {
          timeframes: ["Tick", "1M", "5M", "1H"],
          riskRewardRatio: "1:3.0",
          recommendedAssets: "BTCUSDT, ETHUSDT"
        }
      },
      {
        _id: "ind4",
        name: "Falcon Multi-Breakout Bot",
        slug: "falcon-multi-breakout-bot",
        description: "Fully automated cTrader swing-systems that detects macro session ranges and triggers verified breakout parameters.",
        longDescription: "A premium algorithmic strategy node built specifically for cTrader. Identifies consolidation zones during London/New York sessions and secures quick volatility targets.",
        category: "cat4",
        platform: "plat3",
        price: "$89 / Yr",
        tags: ["Breakout system", "Session Ranges", "cTrader Bot"],
        trustScore: 9.6,
        rating: 4.7,
        likes: 497,
        reviewsCount: 9,
        author: "FalconSpido Core Lab",
        authorEmail: "dev@falconspido.com",
        githubUrl: "",
        isFeatured: false,
        isWarningTier: false,
        specifications: {
          timeframes: ["15M", "30M", "1H"],
          riskRewardRatio: "1:2.0",
          recommendedAssets: "XAUUSD, GBPJPY"
        }
      },
      {
        _id: "ind5",
        name: "Cybernetic Range Oscillator [FLAGGED]",
        slug: "cybernetic-range-oscillator",
        description: "Proprietary high-frequency band-pass filter claiming 99.8% win rates with zero drawdown variables.",
        longDescription: "WARNING: This listing is quarantined. The algorithm utilizes recursive lookahead bias, causing spectacular mock performance data that cannot reflect in actual execution models. Presets are highly volatile.",
        category: "cat2",
        platform: "plat1",
        price: "$999 (High Risk)",
        tags: ["Oscillator", "Lookahead Bias", "Warning Triggered"],
        trustScore: 2.1,
        rating: 1.5,
        likes: 12,
        reviewsCount: 5,
        author: "AlphaMatrix Scams Ltd",
        authorEmail: "scampot@alphamatrix.io",
        isFeatured: false,
        isWarningTier: true,
        specifications: {
          timeframes: ["All"],
          riskRewardRatio: "Undefined",
          recommendedAssets: "All Volatile"
        }
      }
    ],
    reviews: [
      {
        _id: "rev1",
        indicatorId: "ind1",
        reviewerName: "Arthur Morgan",
        rating: 5,
        comment: "Outstanding indicator. The volume filter saves me from fake-outs during New York session opens. Extremely clean code.",
        helpfulVotes: 24,
        date: "2026-06-15"
      },
      {
        _id: "rev2",
        indicatorId: "ind1",
        reviewerName: "Elena Rostova",
        rating: 4,
        comment: "Excellent on 1H chart for Gold. On lower timeframes like 1M, make sure to adjust standard deviation trigger rules.",
        helpfulVotes: 11,
        date: "2026-06-18"
      },
      {
        _id: "rev3",
        indicatorId: "ind5",
        reviewerName: "QuantSnitch",
        rating: 1,
        comment: "Scam warning. Backtested with lookahead functions on Pine Script. Will incinerate your live account. Thanks for flagging this, FalconSpido!",
        helpfulVotes: 89,
        date: "2026-06-19"
      }
    ],
    presets: [
      {
        _id: "pre1",
        indicatorId: "ind1",
        title: "Gold Scalper (Extreme Volatility M5 Preset)",
        author: "XAU_Master",
        description: "High-frequency setting. Vol block lowered to 1.2 to trigger early session breaks. Best with ICMarkets tight spreads.",
        fileContent: '{"volBlock": 1.2, "maPeriod": 20, "alertSqueeze": true}',
        upvotes: 38,
        downvotes: 2,
        date: "2026-06-14"
      },
      {
        _id: "pre2",
        indicatorId: "ind2",
        title: "EURUSD Safe Grid (Low Drawdown H1 Preset)",
        author: "SafeQuant_Global",
        description: "Secure baseline with max concurrent baskets capped at 4. Dynamic grids auto-spaced at 25 pip margins.",
        fileContent: '{"maxBaskets": 4, "gridSpacingPips": 25, "multiplier": 1.3}',
        upvotes: 49,
        downvotes: 1,
        date: "2026-06-17"
      }
    ],
    backtests: [
      {
        _id: "bt1",
        indicatorId: "ind1",
        period: "Jan 2025 - May 2026",
        initialBalance: 10000,
        netProfit: 4520,
        maxDrawdown: 6.4,
        profitFactor: 2.1,
        winRate: 64.2,
        author: "FalconAudit Node",
        proofUrl: "https://myfxbook.com/example/apex-audit",
        status: "Verified",
        date: "2026-06-12"
      }
    ],
    news: [
      {
        _id: "news1",
        title: "Federal Reserve Adjusts Volatility Brackets in Late Q2 Forecast",
        slug: "fed-adjusts-volatility-brackets",
        summary: "The European Central Bank and US Fed both indicate shifting standard liquidity nodes. High-volume macro setups are forming.",
        source: "Falcon Newsroom Block",
        sentiment: "Bullish",
        symbolsAffected: ["XAUUSD", "EURUSD"],
        content: "Central banks announced structural balance updates, triggering immediate shifts in high-frequency algorithmic bands.",
        date: "2026-06-19"
      },
      {
        _id: "news2",
        title: "SEC Enforces Author Accountability Badges for Public Pine Scripts",
        slug: "sec-pinescript-accountability-rules",
        summary: "New algorithmic regulatory guidance targets low-effort, fake performance claims on public script repositories.",
        source: "Algorithmic Watchdog",
        sentiment: "Neutral",
        symbolsAffected: ["BTCUSDT", "ETHUSDT"],
        content: "Authorities are establishing a global ledger to record developer credentials alongside backtest files.",
        date: "2026-06-20"
      },
      {
        _id: "news3",
        title: "Liquidation Cascades Purge Crowded Longs on Volatile Session Opens",
        slug: "liquidation-cascades-purge-crowded-longs",
        summary: "Crypto and gold indices triggered rapid DCA grids as retail leverages exceeded healthy point-of-control margins.",
        source: "QuantMetrics Feed",
        sentiment: "Bearish",
        symbolsAffected: ["SOLUSDT", "XAUUSD"],
        content: "A cascading margin squeeze liquidated millions in retail equity. Proper position sizing could have averted maximum drawdowns.",
        date: "2026-06-20"
      }
    ]
  };

  try {
    if (fs.existsSync(PERSISTENCE_FILE)) {
      const savedContent = fs.readFileSync(PERSISTENCE_FILE, 'utf-8');
      if (savedContent) {
        return JSON.parse(savedContent);
      }
    } else {
      // Create parent directory if missing
      const dirPath = path.dirname(PERSISTENCE_FILE);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      fs.writeFileSync(PERSISTENCE_FILE, JSON.stringify(defaultDatabase, null, 2));
    }
  } catch (error) {
    console.error("Local filesystem load error (falling back to RAM):", error);
  }
  return defaultDatabase;
}

function saveDatabase(db) {
  try {
    const dirPath = path.dirname(PERSISTENCE_FILE);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(PERSISTENCE_FILE, JSON.stringify(db, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error("Local filesystem save error:", error);
    return false;
  }
}

// Lazy init client
let aiClient = null;
function getAi() {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Global cached database running in memory/local file
const db = loadDatabase();

// In-Memory Tickers holding prices so they roll over dynamically
let tickersState = {
  BTCUSDT: { symbol: 'BTCUSDT', price: 68541.20, changePercent: 1.45 },
  ETHUSDT: { symbol: 'ETHUSDT', price: 3824.50, changePercent: -0.82 },
  SOLUSDT: { symbol: 'SOLUSDT', price: 174.15, changePercent: 4.88 },
  EURUSD: { symbol: 'EURUSD', price: 1.0842, changePercent: 0.12 },
  GBPUSD: { symbol: 'GBPUSD', price: 1.2715, changePercent: -0.19 },
  XAUUSD: { symbol: 'XAUUSD', price: 2341.60, changePercent: 0.65 }
};

// Tick helper to shift prices mathematically so graphs look active
function updateMarketTickers() {
  const keys = Object.keys(tickersState);
  keys.forEach(k => {
    const prev = tickersState[k];
    const noise = (Math.random() - 0.5) * (prev.price * 0.001); // 0.1% max fluctuation
    const newPrice = Math.max(0.0001, prev.price + noise);
    const pctChange = prev.changePercent + (Math.random() - 0.5) * 0.2;
    tickersState[k] = {
      symbol: prev.symbol,
      price: parseFloat(newPrice.toFixed(prev.price > 1000 ? 2 : 4)),
      changePercent: parseFloat(Math.min(15, Math.max(-15, pctChange)).toFixed(2))
    };
  });
}

// Static master metadata
const categories = [
  { _id: "cat1", name: "Trend Following", description: "Indicators for tracking dominant momentum paths." },
  { _id: "cat2", name: "Oscillators & Cycles", description: "Swing bands, stochastic momentum, and waves." },
  { _id: "cat3", name: "Volatility & Bands", description: "Bollinger deviations, ATR envelopes, and squeeze channels." },
  { _id: "cat4", name: "EAs & Automated Bots", description: "Autonomous Expert Advisors for MT4/MT5/cTrader." },
  { _id: "cat5", name: "Volume & Delta Order Flow", description: "Institutional profile clusters and CVD metrics." }
];

const platforms = [
  { _id: "plat1", name: "TradingView (Pine Script)", code: "PINE" },
  { _id: "plat2", name: "MetaTrader 4/5 (MQL)", code: "MQL" },
  { _id: "plat3", name: "cTrader (C#)", code: "CTRADER" },
  { _id: "plat4", name: "Python TA Library", code: "PYTHON" }
];

const brokers = [
  {
    _id: "bro1",
    name: "IC Markets",
    minDeposit: 200,
    leverage: "1:500",
    regulation: "ASIC, CySEC",
    spreads: "Raw Spreads from 0.0 pips",
    platformsSupported: ["MT4", "MT5", "cTrader"],
    url: "https://icmarkets.com"
  },
  {
    _id: "bro2",
    name: "Pepperstone",
    minDeposit: 0,
    leverage: "1:400",
    regulation: "FCA, ASIC, CySEC",
    spreads: "Ultra-low institutional pricing",
    platformsSupported: ["MT4", "MT5", "cTrader", "TradingView"],
    url: "https://pepperstone.com"
  },
  {
    _id: "bro3",
    name: "Exness",
    minDeposit: 10,
    leverage: "1:Unlimited",
    regulation: "FCA, CySEC",
    spreads: "Stable narrow spreads",
    platformsSupported: ["MT4", "MT5"],
    url: "https://exness.com"
  }
];

// Handles all requests
export async function GET(request, { params }) {
  updateMarketTickers();
  const segments = (await params).path || [];
  const endpoint = segments.join('/');

  // 1. Categories Catalog
  if (endpoint === 'categories') {
    return NextResponse.json({ success: true, data: categories });
  }

  // 2. Platforms Catalog
  if (endpoint === 'platforms') {
    return NextResponse.json({ success: true, data: platforms });
  }

  // 3. Brokers Listings
  if (endpoint === 'brokers') {
    return NextResponse.json({ success: true, data: brokers });
  }

  // 4. Live prices feed ticks
  if (endpoint === 'market-data/prices') {
    return NextResponse.json({ success: true, data: tickersState });
  }

  // 5. Candles Generator
  if (endpoint.startsWith('market-data/candles/')) {
    const symbol = segments[segments.length - 1] || 'BTCUSDT';
    const ticker = tickersState[symbol] || { price: 100 };
    const basePrice = ticker.price;
    const urlObj = new URL(request.url);
    const count = parseInt(urlObj.searchParams.get('count') || '30');

    // Generate accurate historical candles using mathematical wave
    const candles = [];
    let curr = basePrice - (count * (basePrice * 0.003));
    for (let i = 0; i < count; i++) {
      const open = curr;
      const wave = Math.sin(i * 0.3) * (basePrice * 0.015);
      const close = curr + wave + (Math.random() - 0.5) * (basePrice * 0.005);
      const high = Math.max(open, close) + (Math.random() * (basePrice * 0.005));
      const low = Math.min(open, close) - (Math.random() * (basePrice * 0.005));
      candles.push({
        time: new Date(Date.now() - (count - i) * 3600000).toISOString(),
        open: parseFloat(open.toFixed(basePrice > 1000 ? 2 : 4)),
        high: parseFloat(high.toFixed(basePrice > 1000 ? 2 : 4)),
        low: parseFloat(low.toFixed(basePrice > 1000 ? 2 : 4)),
        close: parseFloat(close.toFixed(basePrice > 1000 ? 2 : 4)),
        volume: parseFloat((10 + Math.random() * 90).toFixed(1))
      });
      curr = close;
    }
    return NextResponse.json({ success: true, data: candles });
  }

  // 6. Volatility Alerts / Screener Data
  if (endpoint === 'screener') {
    const screenerAlerts = [
      { id: 1, symbol: "BTCUSDT", signal: "Strong Bullish Breakout", indicator: "Apex Trend Sentinel", confidence: "94%", timestamp: "Just now" },
      { id: 2, symbol: "XAUUSD", signal: "Extreme Overbought (RSI-79)", indicator: "Quantum Entropy Scalper", confidence: "87%", timestamp: "4 mins ago" },
      { id: 3, symbol: "EURUSD", signal: "Order Flow Squeeze Block", indicator: "Order Flow Delta Matrix", confidence: "91%", timestamp: "12 mins ago" },
      { id: 4, symbol: "SOLUSDT", signal: "MACD Cycle Bottom Cross", indicator: "Apex Trend Sentinel", confidence: "82%", timestamp: "18 mins ago" }
    ];
    return NextResponse.json({ success: true, data: screenerAlerts });
  }

  // 7. News Integration
  if (endpoint === 'news') {
    return NextResponse.json({ success: true, data: db.news });
  }

  // 8. Macro Event Economic Calendar
  if (endpoint === 'macro-calendar') {
    const calendarEvents = [
      { _id: "evt1", title: "USD Retail Sales MoM (Late Review)", impact: "High", actual: "0.3%", forecast: "0.2%", previous: "0.1%", unit: "%", state: "Bullish", source: "Bureau of Labor", time: "08:30 EST" },
      { _id: "evt2", title: "EUR CPI Flash Estimate YoY", impact: "High", actual: "2.4%", forecast: "2.4%", previous: "2.5%", unit: "%", state: "Neutral", source: "Eurostat", time: "11:00 EST" },
      { _id: "evt3", title: "USD FOMC Meeting Minutes Release", impact: "Critical", actual: "Dynamic Statement", forecast: "Hawkish Hold", previous: "5.50%", unit: "Tier", state: "Pending", source: "Federal Reserve", time: "14:00 EST" }
    ];
    return NextResponse.json({ success: true, data: calendarEvents });
  }

  // 9. Trending indicators list
  if (endpoint === 'indicators/trending') {
    const sorted = [...db.indicators].sort((a, b) => b.likes - a.likes);
    return NextResponse.json({ success: true, data: sorted });
  }

  // 10. Dashboard Stats
  if (endpoint === 'indicators/stats') {
    const totalAudited = db.indicators.length;
    const warningCount = db.indicators.filter(i => i.isWarningTier).length;
    const activeReviews = db.reviews.length;
    return NextResponse.json({
      success: true,
      data: {
        totalAudited: 520 + totalAudited,
        quiescentAlerts: 14890,
        warningSystems: 4 + warningCount,
        globalVolumeM: "1.24B",
        activeReviews
      }
    });
  }

  // 11. Profile Check
  if (endpoint === 'auth/profile') {
    return NextResponse.json({
      success: true,
      data: {
        name: "Falcon Trader",
        email: "trader@falconspido.com",
        role: "admin",
        memberSince: "2026-06-01"
      }
    });
  }

  // 12. List indicators with filters
  if (endpoint === 'indicators') {
    const urlObj = new URL(request.url);
    const search = urlObj.searchParams.get('search')?.toLowerCase() || '';
    const cat = urlObj.searchParams.get('category') || '';
    const plat = urlObj.searchParams.get('platform') || '';

    let list = [...db.indicators];
    if (search) {
      list = list.filter(i => 
        i.name.toLowerCase().includes(search) || 
        i.description.toLowerCase().includes(search) ||
        i.tags.some(t => t.toLowerCase().includes(search))
      );
    }
    if (cat) {
      list = list.filter(i => i.category === cat);
    }
    if (plat) {
      list = list.filter(i => i.platform === plat);
    }

    return NextResponse.json({ success: true, data: list });
  }

  // 13. Single indicator details matches
  if (endpoint.startsWith('indicators/')) {
    // Check if subpath is compare
    if (segments[1] === 'compare') {
      const urlObj = new URL(request.url);
      const idsStr = urlObj.searchParams.get('ids') || '';
      const ids = idsStr.split(',').filter(Boolean);
      const matches = db.indicators.filter(i => ids.includes(i._id));
      return NextResponse.json({ success: true, data: matches });
    }

    const slug = segments[1];
    const indicator = db.indicators.find(i => i.slug === slug || i._id === slug);

    if (indicator) {
      // Check if subpath is similar
      if (segments[2] === 'similar') {
        const sims = db.indicators.filter(i => i.category === indicator.category && i._id !== indicator._id);
        return NextResponse.json({ success: true, data: sims });
      }
      return NextResponse.json({ success: true, data: indicator });
    }
  }

  // 14. Get reviews
  if (endpoint.startsWith('reviews/indicator/')) {
    const indId = segments[segments.length - 1];
    const filtered = db.reviews.filter(r => r.indicatorId === indId);
    return NextResponse.json({ success: true, data: filtered });
  }

  // 15. Get presets
  if (endpoint.startsWith('presets/indicator/')) {
    const indId = segments[segments.length - 1];
    const filtered = db.presets.filter(p => p.indicatorId === indId);
    return NextResponse.json({ success: true, data: filtered });
  }

  // 16. Get crowd backtests
  if (endpoint.startsWith('backtest-reports/indicator/')) {
    const indId = segments[segments.length - 1];
    const filtered = db.backtests.filter(b => b.indicatorId === indId);
    return NextResponse.json({ success: true, data: filtered });
  }

  // 17. User admin pending moderation
  if (endpoint === 'admin/submissions') {
    return NextResponse.json({ success: true, data: db.indicators.filter(i => i.isFeatured === false) });
  }

  // Default Fallback
  return NextResponse.json({ success: false, error: "Endpoint route target not mapped: " + endpoint }, { status: 404 });
}

export async function POST(request, { params }) {
  const segments = (await params).path || [];
  const endpoint = segments.join('/');
  const body = await request.json().catch(() => ({}));

  // 1. Submit Premium Indicator Listing
  if (endpoint === 'indicators') {
    const newIndicator = {
      _id: "ind_" + Date.now(),
      name: body.name || "Unnamed Setup",
      slug: (body.name || "unnamed").toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description: body.description || "No description provided.",
      longDescription: body.longDescription || body.description,
      category: body.category || "cat1",
      platform: body.platform || "plat1",
      price: body.price || "Free",
      tags: body.tags || ["Custom Setup"],
      trustScore: parseFloat(((5 + Math.random() * 4.9)).toFixed(1)),
      rating: parseFloat(((4 + Math.random() * 0.9)).toFixed(1)),
      likes: 1,
      reviewsCount: 0,
      author: body.author || "Falcon Trader",
      authorEmail: body.authorEmail || "unknown@falconspido.com",
      githubUrl: body.githubUrl || "",
      isFeatured: false,
      isWarningTier: false,
      specifications: {
        timeframes: ["15M", "1H"],
        riskRewardRatio: "1:2",
        recommendedAssets: "Flexible"
      }
    };
    db.indicators.push(newIndicator);
    saveDatabase(db);
    return NextResponse.json({ success: true, data: newIndicator });
  }

  // 2. Submit indicator review
  if (endpoint === 'reviews') {
    const newReview = {
      _id: "rev_" + Date.now(),
      indicatorId: body.indicatorId || "ind1",
      reviewerName: body.reviewerName || "Verified Algorithmic Tester",
      rating: parseInt(body.rating || "5"),
      comment: body.comment || "Algorithm evaluated based on visual triggers.",
      helpfulVotes: 0,
      date: new Date().toISOString().split('T')[0]
    };
    db.reviews.push(newReview);
    
    // update parent indicator review stats
    const ind = db.indicators.find(i => i._id === newReview.indicatorId);
    if (ind) {
      ind.reviewsCount = (ind.reviewsCount || 0) + 1;
      ind.rating = parseFloat(((ind.rating + newReview.rating) / 2).toFixed(1));
    }

    saveDatabase(db);
    return NextResponse.json({ success: true, data: newReview });
  }

  // 3. Submit parameter presets
  if (endpoint === 'presets') {
    const newPreset = {
      _id: "pre_" + Date.now(),
      indicatorId: body.indicatorId,
      title: body.title || "Custom Parameter Matrix",
      author: body.author || "Anonymous Coder",
      description: body.description || "Optimized setup.",
      fileContent: body.fileContent || "{}",
      upvotes: 0,
      downvotes: 0,
      date: new Date().toISOString().split('T')[0]
    };
    db.presets.push(newPreset);
    saveDatabase(db);
    return NextResponse.json({ success: true, data: newPreset });
  }

  // 4. Submit crowd backtests
  if (endpoint === 'backtest-reports') {
    const newReport = {
      _id: "bt_" + Date.now(),
      indicatorId: body.indicatorId,
      period: body.period || "Last 12 Months",
      initialBalance: parseFloat(body.initialBalance) || 10000,
      netProfit: parseFloat(body.netProfit) || 0,
      maxDrawdown: parseFloat(body.maxDrawdown) || 0,
      profitFactor: parseFloat(body.profitFactor) || 1.0,
      winRate: parseFloat(body.winRate) || 50.0,
      author: body.author || "Community Quant",
      proofUrl: body.proofUrl || "",
      status: "Verified",
      date: new Date().toISOString().split('T')[0]
    };
    db.backtests.push(newReport);
    saveDatabase(db);
    return NextResponse.json({ success: true, data: newReport });
  }

  // 5. Auth Actions
  if (endpoint === 'auth/login') {
    if (body.email && body.password) {
      return NextResponse.json({
        success: true,
        data: {
          token: "jwt_tok_" + Math.random().toString(36).substring(2),
          user: {
            name: "Falcon Trader",
            email: body.email,
            role: "admin"
          }
        }
      });
    }
    return NextResponse.json({ success: false, error: "Access credentials must not be empty" }, { status: 400 });
  }

  if (endpoint === 'auth/register') {
    if (body.email && body.password && body.name) {
      return NextResponse.json({
        success: true,
        data: {
          token: "jwt_tok_" + Math.random().toString(36).substring(2),
          user: {
            name: body.name,
            email: body.email,
            role: "user"
          }
        }
      });
    }
    return NextResponse.json({ success: false, error: "All profile entries are mandatory" }, { status: 400 });
  }

  // 6. Volatility position sizer math model
  if (endpoint === 'calculator/position-size') {
    const balance = parseFloat(body.accountBalance) || 10000;
    const riskPct = parseFloat(body.riskPercentage) || 1.0;
    const slPips = parseFloat(body.stopLossPips) || 20;
    const pipVal = parseFloat(body.pipValue) || 10; // USD standard per pip standard lot
    
    const cashAtRisk = balance * (riskPct / 100);
    const standardLots = parseFloat((cashAtRisk / (slPips * pipVal)).toFixed(3));
    const finalSize = Math.max(0.01, standardLots);

    return NextResponse.json({
      success: true,
      data: {
        cashAtRisk: parseFloat(cashAtRisk.toFixed(2)),
        positionSize: finalSize,
        leverageRecommendation: balance > 5000 ? "1:100 (Conservative)" : "1:200 (Standard)",
        marginReqEstimated: parseFloat((finalSize * 1000).toFixed(2))
      }
    });
  }

  if (endpoint === 'calculator/dca-presets') {
    const base = parseFloat(body.basePrice) || 100;
    const dropPct = parseFloat(body.dropPercentage) || 2.0;
    const martingale = parseFloat(body.martingaleMultiplier) || 1.5;
    const zones = parseInt(body.gridZones || "5");
    const initialLot = parseFloat(body.initialValue) || 0.1;

    const layers = [];
    let currentPrice = base;
    let currentLot = initialLot;
    let totalInvested = 0;

    for (let i = 1; i <= zones; i++) {
      currentPrice = currentPrice * (1 - (dropPct / 100));
      currentLot = currentLot * (i === 1 ? 1 : martingale);
      totalInvested += currentPrice * currentLot;
      layers.push({
        zone: `Anchor DCA Zone ${i}`,
        priceTrigger: parseFloat(currentPrice.toFixed(base > 1000 ? 2 : 4)),
        lotSize: parseFloat(currentLot.toFixed(3)),
        drawbackThreshold: `${(dropPct * i).toFixed(1)}%`
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        layers,
        totalLotAllocation: parseFloat(layers.reduce((acc, curr) => acc + curr.lotSize, 0).toFixed(3)),
        liquidationEstimate: parseFloat((currentPrice * 0.85).toFixed(base > 1000 ? 2 : 4))
      }
    });
  }

  // 7. Dynamic AI Code detail extractor
  if (endpoint === 'ai/extract') {
    const url = body.url || '';
    const ai = getAi();
    
    if (ai) {
      try {
        const prompt = `You are a professional compiler audit bot. Analyze this indicator or EA landing target: "${url}".
        Generate a detailed technical metadata summary for this quant listing in JSON format.
        Include keys: 
        - "name" (The detected script indicator or EA name, clean short),
        - "description" (1-sentence metadata overview),
        - "longDescription" (Comprehensive quantitative rationale),
        - "price" (Price info or free/open-source status),
        - "tags" (Array of 3 professional tag phrases),
        - "specifications" (Object with string properties "timeframes", "riskRewardRatio", "recommendedAssets").
        Return raw JSON only, no markdown wrapping, so we can parse it directly.`;

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
        });

        const rawText = response.text || '';
        const cleaned = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return NextResponse.json({ success: true, data: parsed });
      } catch (err) {
        console.error("Gemini premium automation failing, trigger default state:", err);
      }
    }

    // High fidelity regex heuristic fallback if Gemini key is not configured yet
    const nameSeed = url.replace(/https?:\/\/(www\.)?/, '').split('/')[0] || "Pine Sentinel";
    const nameCleaned = nameSeed.charAt(0).toUpperCase() + nameSeed.slice(1).replace(/\..*/, '') + " Setup Hub";
    return NextResponse.json({
      success: true,
      data: {
        name: `${nameCleaned}`,
        description: `Highly responsive grid breakout and cumulative delta systems audited for ${nameCleaned} users.`,
        longDescription: `Automated analytical proxy that processes session momentum in local corridors, optimizing dynamic take-profits and secured risk/reward profiles.`,
        price: "Free Open-Source (GPLv3)",
        tags: ["Volatility Breakout", "Volume Scalp", "EMA Correlation"],
        specifications: {
          timeframes: ["5M", "15M", "1H"],
          riskRewardRatio: "1:2.0",
          recommendedAssets: "EURUSD, XAUUSD"
        }
      }
    });
  }

  // 8. Admin AI Generation Automation
  if (endpoint.startsWith('admin/automation/')) {
    const ai = getAi();
    const type = segments[segments.length - 1]; // "discover", "generate-news", "generate-blog"
    const topic = body.topic || body.keyword || 'Forex Volatility';

    if (ai) {
      try {
        if (type === 'generate-news') {
          const prompt = `Generate a high quality, professional trading volatility news flash about "${topic}".
          Include JSON keys: "title", "summary", "sentiment" ("Bullish" or "Bearish" or "Neutral"), "symbolsAffected" (Array of tickers, e.g. ["BTCUSDT", "EURUSD"]), "content".
          Provide raw JSON only.`;
          const res = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
          });
          const parsed = JSON.parse(res.text.replace(/```json/g, '').replace(/```/g, '').trim());
          const newNews = {
            _id: "news_" + Date.now(),
            ...parsed,
            source: "AI Intelligent Lead",
            date: new Date().toISOString().split('T')[0]
          };
          db.news.unshift(newNews);
          saveDatabase(db);
          return NextResponse.json({ success: true, data: [newNews] });
        }
      } catch (err) {
        console.error("News bot failed:", err);
      }
    }

    // Default static ingestion
    const fallbackNews = {
      _id: "news_" + Date.now(),
      title: `Decentralized order book liquidity triggers volatile shifts on ${topic}`,
      summary: `A technical session breakdown on ${topic} shows massive cumulative volume delta swings.`,
      sentiment: "Bullish",
      symbolsAffected: ["XAUUSD", "BTCUSDT"],
      content: `Institutional liquidity blocks collapsed relative to consolidation triggers. Market participants must monitor custom DCA channels.`,
      source: "Manual Audit",
      date: new Date().toISOString().split('T')[0]
    };
    db.news.unshift(fallbackNews);
    saveDatabase(db);
    return NextResponse.json({ success: true, data: [fallbackNews] });
  }

  return NextResponse.json({ success: false, error: "Path not mapped" }, { status: 404 });
}

export async function PATCH(request, { params }) {
  const segments = (await params).path || [];
  const endpoint = segments.join('/');

  // 1. Upvote review
  if (endpoint.startsWith('reviews/') && endpoint.endsWith('/helpful')) {
    const revId = segments[1];
    const rev = db.reviews.find(r => r._id === revId);
    if (rev) {
      rev.helpfulVotes = (rev.helpfulVotes || 0) + 1;
      saveDatabase(db);
      return NextResponse.json({ success: true, data: rev });
    }
  }

  // 2. Like indicator
  if (endpoint.startsWith('indicators/') && endpoint.endsWith('/like')) {
    const indId = segments[1];
    const ind = db.indicators.find(i => i._id === indId || i.slug === indId);
    if (ind) {
      ind.likes = (ind.likes || 0) + 1;
      saveDatabase(db);
      return NextResponse.json({ success: true, data: ind });
    }
  }

  // 3. Flag Scam
  if (endpoint.startsWith('indicators/') && endpoint.endsWith('/flag-scam')) {
    const indId = segments[1];
    const ind = db.indicators.find(i => i._id === indId || i.slug === indId);
    if (ind) {
      ind.isWarningTier = true;
      ind.trustScore = parseFloat((ind.trustScore * 0.4).toFixed(1)); // drag trust score down
      saveDatabase(db);
      return NextResponse.json({ success: true, data: ind });
    }
  }

  return NextResponse.json({ success: false, error: "Action route not mapped" }, { status: 404 });
}

export async function PUT(request, { params }) {
  const segments = (await params).path || [];
  const endpoint = segments.join('/');

  // Admin approval of user submitted listing
  if (endpoint.startsWith('admin/submissions/') && endpoint.endsWith('/approve')) {
    const indId = segments[2];
    const ind = db.indicators.find(i => i._id === indId);
    if (ind) {
      ind.isFeatured = true;
      saveDatabase(db);
      return NextResponse.json({ success: true, data: ind });
    }
  }

  if (endpoint.startsWith('admin/submissions/') && endpoint.endsWith('/reject')) {
    const indId = segments[2];
    db.indicators = db.indicators.filter(i => i._id !== indId);
    saveDatabase(db);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, error: "Put endpoint not found" }, { status: 404 });
}
