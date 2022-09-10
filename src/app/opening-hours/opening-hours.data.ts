export const openingHours: {
  weekday: string;
  forenoonTime: string;
  afternoonTime: string;
}[] = [
  {
    weekday: 'Montag',
    forenoonTime: '9:00 - 12:00',
    afternoonTime: '13:30 - 17:00'
  },
  {
    weekday: 'Dienstag',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00'
  },
  {
    weekday: 'Mittwoch',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00'
  },
  {
    weekday: 'Donnerstag',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00'
  },
  {
    weekday: 'Freitag',
    forenoonTime: '9:00 - 12:00',
    afternoonTime: '13:30 - 16:00'
  },
  {
    weekday: 'Saturday',
    forenoonTime: 'geschlossen',
    afternoonTime: 'geschlossen'
  },
  {
    weekday: 'Sunday',
    forenoonTime: 'geschlossen',
    afternoonTime: 'geschlossen'
  }
];

export const freeDays: { dayName: string; date: string }[] = [
  { dayName: 'Karfreitag', date: '29.03.2024' },
  { dayName: 'Ostermontag', date: '01.04.2024' },
  { dayName: 'Tag der Arbeit', date: '01.05.2024' },
  { dayName: 'Auffahrt', date: '09.05.2024' },
  { dayName: 'Auffahrtsbrücke', date: '10.05.2024' },
  { dayName: 'Pfingstmontag', date: '20.05.2024' },
  { dayName: 'Fronleichnam', date: '30.05.2024' }
];
