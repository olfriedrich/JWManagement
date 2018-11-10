const vessel = {
  nameShort: 'Vessels',
  entity: {
    name: 'Vessel name',
    flag: 'Flag',
    type: 'Type',
    typeValues: {
      c: 'Container ship',
      cr: 'Cruise ship',
      mf: 'Cargo',
      mt: 'Tanker',
      p: 'Passenger ship',
      pt: 'Pushtow',
      rc: 'River cruise ship',
      f: 'Ferry',
      ro: 'Ro-Ro',
      t: 'Tug',
      unknown: 'Unknown'
    },
    callsign: 'Call sign',
    eni: 'ENI',
    imo: 'IMO',
    mmsi: 'MMSI',
    delete: 'Delete this vessel',
    deleteConfirmation: 'Do you really want to delete this vessel?',
    visit: {
      new: 'Note a new visit',
      noElements: 'This ship has not been visited yet',
      delete: 'Delete this visit',
      deleteConfirmation: 'Do you really want to delete this visit?',
      person: 'Publisher',
      email: 'Publisher email address',
      phone: 'Publisher phone number',
      isUserVisible: 'Make your contact data visible for other publishers?',
      date: 'Date',
      dateNext: 'Next visit preferably after',
      harbor: 'Harbor',
      harborId: 'Harbor',
      harborIdValues: {
        placeholder: 'Select a harbor',
        atasc: '(ATASC) Aschach an der Donau',
        atena: '(ATENA) Enns',
        atkre: '(ATKRE) Krems',
        atlnz: '(ATLNZ) Linz',
        atvie: '(ATVIE) Wien',
        atybb: '(ATYBB) Ybbs an der Donau',
        chbbs: '(CHBBS) Basel Schweizerhalle',
        chbsl: '(CHBSL) Basel',
        chrfd: '(CHRFD) Rheinfelden CH',
        deand: '(DEAND) Andernach',
        debbg: '(DEBBG) Brandenburg',
        debed: '(DEBED) Bendorf',
        debek: '(DEBEK) Bernkastel',
        deber: '(DEBER) Berlin',
        debke: '(DEBKE) Brake',
        deblm: '(DEBLM) Blumenthal',
        debmk: '(DEBMK) Borkum',
        debon: '(DEBON) Bonn',
        debot: '(DEBOT) Bottrop',
        debrb: '(DEBRB) Brunsbüttel',
        debre: '(DEBRE) Bremen',
        debrv: '(DEBRV) Bremerhaven',
        debsh: '(DEBSH) Breisach',
        debsk: '(DEBSK) Burgstaaken',
        debum: '(DEBUM) Buesum',
        debuz: '(DEBUZ) Bützfleth',
        decgn: '(DECGN) Köln',
        decux: '(DECUX) Cuxhaven',
        dedeg: '(DEDEG) Deggendorf',
        dedhu: '(DEDHU) Huckingen',
        dedmg: '(DEDMG) Chempark Dormagen',
        dedrp: '(DEDRP) Dörpen',
        dedrs: '(DEDRS) Dresden',
        dedtm: '(DEDTM) Dortmund',
        dedui: '(DEDUI) Duisburg',
        dedus: '(DEDUS) Düsseldorf',
        deeck: '(DEECK) Eckernförde',
        deehm: '(DEEHM) Senheim',
        deeme: '(DEEME) Emden',
        deflf: '(DEFLF) Flensburg',
        defra: '(DEFRA) Frankfurt am Main',
        degdo: '(DEGDO) Godorf',
        degek: '(DEGEK) Gelsenkirchen',
        deger: '(DEGER) Germersheim',
        deget: '(DEGET) Geesthacht',
        degic: '(DEGIC) Grünendeich',
        degkg: '(DEGKG) Grosskrotzenburg',
        deglu: '(DEGLU) Glückstadt',
        degmz: '(DEGMZ) Grömitz',
        degrd: '(DEGRD) Greifswald',
        degre: '(DEGRE) Greetsiel',
        deham: '(DEHAM) Hamburg',
        dehau: '(DEHAU) Hanau',
        dehcs: '(DEHCS) Höchst',
        dehee: '(DEHEE) Herne',
        dehgl: '(DEHGL) Helgoland',
        dehhf: '(DEHHF) Heiligenhafen',
        dehil: '(DEHIL) Hildesheim',
        dehmm: '(DEHMM) Hamm',
        dehus: '(DEHUS) Husum',
        dejwp: '(DEJWP) Jade Weser Port',
        dekae: '(DEKAE) Karlsruhe',
        dekap: '(DEKAP) Kappeln',
        dekdu: '(DEKDU) Krefeld-Ürdingen',
        dekeh: '(DEKEH) Kehl',
        dekel: '(DEKEL) Kiel',
        dekob: '(DEKOB) Koblenz',
        dekre: '(DEKRE) Krefeld',
        delah: '(DELAH) Lahnstein',
        delbc: '(DELBC) Lübeck',
        delbm: '(DELBM) Lubim',
        deldb: '(DELDB) Ladbergen',
        delee: '(DELEE) Leer',
        delev: '(DELEV) Chempark Leverkusen',
        delew: '(DELEW) Lemwerder',
        delig: '(DELIG) Lingen/Ems',
        delnu: '(DELNU) Lauenburg',
        delue: '(DELUE) Lunen',
        delwr: '(DELWR) Ludwigshafen',
        demai: '(DEMAI) Mainz',
        demal: '(DEMAL) Marl',
        demhg: '(DEMHG) Mannheim',
        demid: '(DEMID) Minden',
        demlm: '(DEMLM) Mühlheim am Main',
        demnf: '(DEMNF) Mondorf',
        demoe: '(DEMOE) Mölln',
        demrt: '(DEMRT) Luxport Mertert',
        demsr: '(DEMSR) Münster',
        demuk: '(DEMUK) Mukran',
        dendt: '(DENDT) Neustadt (in Holstein)',
        dened: '(DENED) Neuwied',
        denha: '(DENHA) Nordenham',
        denhl: '(DENHL) Niehl',
        denho: '(DENHO) Neustadt in Holstein',
        denoe: '(DENOE) Norddeich',
        denrd: '(DENRD) Norderney',
        denss: '(DENSS) Neuss',
        denue: '(DENUE) Nürnberg',
        deoff: '(DEOFF) Offenbach am Main',
        deolu: '(DEOLU) Oldersum',
        depap: '(DEPAP) Papenburg',
        depas: '(DEPAS) Passau',
        depei: '(DEPEI) Peine',
        deplo: '(DEPLO) Plochingen',
        deput: '(DEPUT) Puttgarden',
        depyk: '(DEPYK) Spyck',
        dereg: '(DEREG) Regensburg',
        deren: '(DEREN) Rendsburg',
        derfn: '(DERFN) Rheinfelden D',
        dergm: '(DERGM) Nuremberg',
        dersk: '(DERSK) Rostock',
        derue: '(DERUE) Rüdesheim',
        desar: '(DESAR) Salzgitter',
        desas: '(DESAS) Sassnitz',
        descw: '(DESCW) Schweinfurt',
        deses: '(DESES) Schierstein',
        desgw: '(DESGW) Schwelgern',
        desls: '(DESLS) Schleswig',
        despe: '(DESPE) Speyer',
        despy: '(DESPY) Spay',
        desrc: '(DESRC) Scharnebeck',
        desta: '(DESTA) Stade',
        destl: '(DESTL) Stralsund',
        destr: '(DESTR) Stuttgart',
        dests: '(DESTS) Stadersand',
        detri: '(DETRI) Trier',
        detrv: '(DETRV) Travemunde',
        deuck: '(DEUCK) Ükermünde',
        deuel: '(DEUEL) Uelzen',
        deviw: '(DEVIW) Vierow',
        dewed: '(DEWED) Wedel',
        dewes: '(DEWES) Wesel',
        dewib: '(DEWIB) Wiesbaden',
        dewis: '(DEWIS) Wismar',
        dewlg: '(DEWLG) Wesseling',
        dewlr: '(DEWLR) Weil am Rhein',
        dewnu: '(DEWNU) Weissenthurm',
        dewoe: '(DEWOE) Wörth',
        dewol: '(DEWOL) Wolgast',
        dewor: '(DEWOR) Worms',
        dewue: '(DEWUE) Würzburg',
        dewvn: '(DEWVN) Wilhelmshaven',
        dewyk: '(DEWYK) Wyk auf Föhr',
        dezin: '(DEZIN) Zinnowitz',
        plgdn: '(PLGDN) Gdansk',
        plgdy: '(PLGDY) Gdynia',
        plswi: '(PLSWI) Swinoujscie',
        plszz: '(PLSZZ) Szczecin'
      },
      country: 'Country',
      language: {
        new: 'Add a language',
        noElements: 'No languages noted yet',
        methodConfirmation: 'Do you really want to delete this language?',
        languageIds: 'Language',
        languageIdsValues: {
          placeholder: 'Select a language'
        }
      },
      languages: 'Languages on board'
    }
  },
  search: {
    placeholder: 'Vessel name, call sign, ENI, IMO or MMSI'
  },
  details: {
    sections: {
      identification: 'Identification data',
      visit: 'Visit data'
    },
    dateFormat: 'MM/DD/YYYY'
  },
  visit: {
    details: {
      sections: {
        main: 'Visit data',
        language: 'Language data',
        option: 'Options'
      },
      dateFormat: 'MM/DD/YYYY'
    }
  }
}

export default vessel
