const CONFIG = {
  SPORTSRC_BASE: 'https://api.sportsrc.org/',
  SPORTSRC_V2_KEY: '',
  SPORTSRC_V2_BASE: 'https://api.sportsrc.org/v2/',

  MATCH_INFO: {
    // 'nacional-vs-guimaraes-football-1396541': {
    //   league: 'الدوري البرتغالي',
    //   channels: ['beIN Sports 1 HD', 'beIN Sports 2 HD'],
    //   commentator: 'عصام الشوالي'
    // }
  },

  LEAGUE_CHANNELS: {
    'UEFA Champions League': { channels: ['beIN Sports 1 HD', 'beIN Sports 2 HD'], commentator: 'عصام الشوالي' },
    'UEFA Europa League': { channels: ['beIN Sports 3 HD', 'beIN Sports 4 HD'], commentator: 'عامر عبدو' },
    'Premier League': { channels: ['beIN Sports 1 HD'], commentator: 'عامر عبدو' },
    'La Liga': { channels: ['beIN Sports 3 HD'], commentator: 'عصام الشوالي' },
    'Serie A': { channels: ['beIN Sports 4 HD'], commentator: 'جواد بدة' },
    'Bundesliga': { channels: ['beIN Sports 5 HD'], commentator: 'خالد الحدي' },
    'Ligue 1': { channels: ['beIN Sports 6 HD'], commentator: 'حفيظ دراجي' },
    'Primeira Liga': { channels: ['beIN Sports 7 HD'], commentator: 'علي سعيد' },
    'Eredivisie': { channels: ['beIN Sports 8 HD'], commentator: 'مصطفى سعيد' },
    'Campeonato Brasileiro Série A': { channels: ['ESPN Brasil'], commentator: 'أندريه كوري' },
    'World Cup': { channels: ['beIN Sports 1 HD', 'beIN Sports 2 HD', 'beIN Sports 3 HD'], commentator: 'عصام الشوالي' },
  },

  KOORA_SOURCES: {}
};

const MAJOR_LEAGUES = [
  { code: 'PL', name: 'Premier League' },
  { code: 'PD', name: 'La Liga' },
  { code: 'SA', name: 'Serie A' },
  { code: 'BL1', name: 'Bundesliga' },
  { code: 'FL1', name: 'Ligue 1' },
  { code: 'CL', name: 'UEFA Champions League' },
  { code: 'PPL', name: 'Primeira Liga' },
  { code: 'DED', name: 'Eredivisie' },
  { code: 'BSA', name: 'Campeonato Brasileiro Série A' },
];
