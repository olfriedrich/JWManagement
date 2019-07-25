const store = {
  title: 'Store Room Dashboard',
  short: 'Shortcut',
  language: 'Language',
  languages: 'Languages',
  total: 'Total',
  count: 'Count',
  showAll: 'Show all publications',
  hideAll: 'Hide all non-added publications',
  reset: 'Reset store room',
  noPublication: 'You haven\'t added a publication yet.<br>To add a publication, use the button to show all available publications.<br>Then select all publications that you keep in your store room.<br>Click on the publication to configure the langauges in which it is stocked.',
  startAddLanguage: 'Add Language',
  cancelAddLanguage: 'Cancel',
  close: 'Close',
  addLanguage: 'Add',
  removeLanguage: 'Remove this language',
  setup: {
    title: 'Please choose a store mode',
    support: 'Sorry this is not yet supported',
    description: 'Please choose a mode to initialize your store room.<br>You can change this later, if you need to.',
    simple: {
      name: 'Simple',
      description: 'With simple mode, the system will automatically configure some basic item categories like "Books & Bibles", "Magazines", etc for you. These will be available in the report.'
    },
    advanced: {
      name: 'Advanced',
      description: 'With advanced mode you can decide which publications are available in which languages. You can define how many of them are in the store room and the system will keep them up to date with the information from the reports. With this you can determine which publications and languages work the best for your project.'
    }
  },
  type: {
    meta: 'Meta',
    books: 'Books',
    brochures: 'Brochures',
    magazines: 'Magazines',
    tracts: 'Tracts',
    misc: 'Miscellaneous'
  },
  publication: {
    any: 'Placements',
    'CO-inv17': '2017 Regional Convention Invitation',
    'CO-inv18': '2018 Regional Convention Invitation',
    'CO-inv19': '2019 Regional Convention Invitation',
    'CO-inv20': '2020 Regional Convention Invitation',
    bh: 'What Does the Bible Really Teach?',
    bhs: 'What Can the Bible Teach Us?',
    bi12: 'New World Translation of the Holy Scriptures (1984 Edition)',
    bm: 'The Bible — What Is Its Message?',
    cf: 'Come Be My Follower',
    ct: 'Is There a Creator Who Cares About You?',
    dv: 'DVD',
    fg: 'Good News From God!',
    fy: 'The Secret of Family Happiness',
    gt: 'The Greatest Man Who Ever Lived',
    gu: 'The Guidance of God — Our Way to Paradise',
    hf: 'Your Family Can Be Happy',
    inv: 'Invitation to congregation meetings',
    jr: 'God\'s Word for Us Through Jeremiah',
    jw: 'Jesus​—The Way, the Truth, the Life',
    jwcd: 'Contact card for jw.org',
    kt: 'Would You Like to Know the Truth?',
    la: 'A Satisfying Life—How to Attain It',
    lc: 'Was Life Created?',
    ld: 'Listen to God',
    lf: 'The Origin of Life — Five Questions Worth Asking',
    lfb: 'Lessons You Can Learn From the Bible',
    ll: 'Listen to God and Live Forever',
    lgw: 'An Introction to God\'s Word',
    lmn: 'Look! I Am Making All Things New',
    lr: 'Learn From the Great Teacher',
    mb: 'My Bible Lessons',
    mi16: '2016 Memorial Invitation',
    mi17: '2017 Memorial Invitation',
    mi18: '2018 Memorial Invitation',
    mi19: '2019 Memorial Invitation',
    mi20: '2020 Memorial Invitation',
    my: 'My Book of Bible Stories',
    nwt: 'New World Translation of the Holy Scriptures (2013 Revision)',
    ol: 'The Road to Everlasting Life — Have You Found It?',
    pc: 'Lasting Peace and Happiness - How to Find Them',
    ph: 'The Pathway to Peace and Happiness',
    rj: 'Return to Jehovah',
    rk: 'Real Faith — Your Key to a Happy Life',
    rp: 'How to Find the Road to Paradise',
    sgd: 'Studienhilfe zur Bibel',
    't-30': 'How Do You View the Bible?',
    't-31': 'How Do You View the Future?',
    't-32': 'What Is the Key to Happy Family Life?',
    't-33': 'Who Really Controls the World?',
    't-34': 'Will Suffering Ever End?',
    't-35': 'Can the Dead Really Live Again?',
    't-36': 'What Is the Kingdom of God?',
    't-37': 'Where Can We Find Answers to Life\'s Big Questions?',
    we: 'When Someone You Love Dies',
    'wp/g': 'Watchtower / Awake',
    yc: 'Teach Your Children',
    yp1: 'Questions Young People Ask — Answers That Work, Volume 1',
    yp2: 'Questions Young People Ask — Answers That Work, Volume 2',
    ypq: 'Answers to 10 Questions Young People Ask',
    hl: 'How Can You Have a Happy Life?'
  }
}

export default store