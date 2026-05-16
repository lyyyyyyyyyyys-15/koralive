const matchesData = [
  {
    id: 'real-madrid-bayern',
    team1: { name: 'ريال مدريد', flag: '🇪🇸', logo: '' },
    team2: { name: 'بايرن ميونخ', flag: '🇩🇪', logo: '' },
    date: '2026-05-16',
    time: '22:00',
    status: 'upcoming',
    league: 'دوري أبطال أوروبا',
    round: 'النهائي',
    stadium: 'أليانز أرينا',
    channels: ['beIN Sports 1 HD', 'beIN Sports 2 HD'],
    commentator: 'عصام الشوالي',
    sources: [
      'https://16.kooora-kora.live/2025/06/11-be-in-sport-1211111.html'
    ]
  },
  {
    id: 'liverpool-psg',
    team1: { name: 'ليفربول', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', logo: '' },
    team2: { name: 'باريس سان جيرمان', flag: '🇫🇷', logo: '' },
    date: '2026-05-16',
    time: '20:00',
    status: 'upcoming',
    league: 'الدوري الأوروبي',
    round: 'نصف النهائي',
    stadium: 'أنفيلد',
    channels: ['beIN Sports 3 HD'],
    commentator: 'عامر عبدو',
    sources: [
      'https://16.kooora-kora.live/2025/06/11-be-in-sport-1211111.html'
    ]
  },
  {
    id: 'barcelona-juventus',
    team1: { name: 'برشلونة', flag: '🇪🇸', logo: '' },
    team2: { name: 'يوفنتوس', flag: '🇮🇹', logo: '' },
    date: '2026-05-17',
    time: '22:00',
    status: 'upcoming',
    league: 'دوري أبطال أوروبا',
    round: 'ربع النهائي',
    stadium: 'كامب نو',
    channels: ['beIN Sports 1 HD', 'beIN Sports 4 HD'],
    commentator: 'جواد بدة',
    sources: [
      'https://16.kooora-kora.live/2025/06/11-be-in-sport-1211111.html'
    ]
  },
  {
    id: 'manutd-chelsea',
    team1: { name: 'مانشستر يونايتد', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', logo: '' },
    team2: { name: 'تشيلسي', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', logo: '' },
    date: '2026-05-16',
    time: '19:30',
    status: 'upcoming',
    league: 'الدوري الإنجليزي',
    round: 'الجولة 38',
    stadium: 'أولد ترافورد',
    result: '3 - 1',
    channels: ['beIN Sports 2 HD'],
    commentator: 'حفيظ دراجي',
    sources: []
  },
  {
    id: 'milan-inter',
    team1: { name: 'إيه سي ميلان', flag: '🇮🇹', logo: '' },
    team2: { name: 'إنتر ميلان', flag: '🇮🇹', logo: '' },
    date: '2026-05-17',
    time: '21:45',
    status: 'upcoming',
    league: 'دوري أبطال أوروبا',
    round: 'نصف النهائي',
    stadium: 'سان سيرو',
    channels: ['beIN Sports 1 HD'],
    commentator: 'عصام الشوالي',
    sources: [
      'https://16.kooora-kora.live/2025/06/11-be-in-sport-1211111.html'
    ]
  }
];

function sortMatches(matches) {
  return [...matches].sort((a, b) => {
    const dateA = new Date(a.date + 'T' + a.time);
    const dateB = new Date(b.date + 'T' + b.time);
    return dateA - dateB;
  });
}

function getMatchesByStatus(matches, status) {
  return matches.filter(m => m.status === status);
}

function groupByDate(matches) {
  const groups = {};
  matches.forEach(m => {
    if (!groups[m.date]) groups[m.date] = [];
    groups[m.date].push(m);
  });
  return groups;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('ar-EG', options);
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  return days[d.getDay()] + ' ' + d.getDate() + '/' + (d.getMonth() + 1);
}
