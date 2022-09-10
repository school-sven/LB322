export const openingHours: {
  weekday: string;
  forenoonTime: string;
  afternoonTime: string;
}[] = [
  {
    weekday: 'Montag',
    forenoonTime: '9:00 - 12:00',
    afternoonTime: '13:30 - 17:00',
  },
  {
    weekday: 'Dienstag',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00',
  },
  {
    weekday: 'Mittwoch',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00',
  },
  {
    weekday: 'Donnerstag',
    forenoonTime: '8:30 - 12:00',
    afternoonTime: '13:30 - 17:00',
  },
  {
    weekday: 'Freitag',
    forenoonTime: '9:00 - 12:00',
    afternoonTime: '13:30 - 16:00',
  },
  {
    weekday: 'Samstag',
    forenoonTime: 'geschlossen',
    afternoonTime: 'geschlossen',
  },
  {
    weekday: 'Sonntag',
    forenoonTime: 'geschlossen',
    afternoonTime: 'geschlossen',
  },
];

export const freeDays: { dayName: string; date: string }[] = [
  { dayName: 'Karfreitag', date: '07.04.2023' },
  { dayName: 'Ostermontag', date: '10.04.2023' },
  { dayName: 'Tag der Arbeit', date: '01.05.2023' },
  { dayName: 'Auffahrt', date: '18.05.2023' },
  { dayName: 'Auffahrtsbrücke', date: '19.05.2023' },
  { dayName: 'Pfingstmontag', date: '29.05.2023' },
  { dayName: 'Fronleichnam', date: '08.06.2023' },
];
