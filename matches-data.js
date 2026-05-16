const matchesData = [];

function sortMatches(matches) {
  return [...matches].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
}

function getMatchesByStatus(matches, status) {
  return matches.filter(m => m.status === status);
}

function groupByDate(matches) {
  const groups = {};
  matches.forEach(m => {
    const key = new Date(m.date).toDateString();
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  });
  return groups;
}

function formatDate(ts) {
  const d = new Date(ts);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('ar-EG', options);
}

function formatDateShort(ts) {
  const d = new Date(ts);
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  return days[d.getDay()] + ' ' + d.getDate() + '/' + (d.getMonth() + 1);
}
