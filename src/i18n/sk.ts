export const sk = {
  meta: {
    defaultTitle: 'Galeida — jednoduchší deň v salóne',
    defaultDescription:
      'Aplikácia pre nechtové salóny. História návštev, poznámky a fotografie klientok vždy po ruke.',
    ogSiteName: 'Galeida',
    ogLocale: 'sk_SK',
    ogImagePath: '/og-image.png',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'Galeida — aplikácia pre nechtové salóny',
    twitterCard: 'summary_large_image',
  },
  notFound: {
    title: 'Stránka sa nenašla — Galeida',
    heading: 'Táto stránka neexistuje',
    lead: 'Skúste sa vrátiť na úvodnú stránku.',
    backHome: 'Späť na úvod',
  },
  announcement: {
    message:
      'Galeida sa pripravuje. Aplikácia je zatiaľ v testovaní a prístup je len na pozvanie.',
  },
  header: {
    logo: 'galeida',
    nav: {
      features: 'Funkcie',
      audience: 'Pre koho',
      about: 'O Galeide',
    },
    login: 'Prihlásiť sa',
    menuLabel: 'Otvoriť menu',
    menuCloseLabel: 'Zavrieť menu',
  },
  hero: {
    eyebrow: 'JEDNODUCHŠÍ DEŇ V SALÓNE',
    title: 'Všetko o klientke máte vždy po ruke.',
    lead: 'Od prvej návštevy po poslednú fotografiu. Prehľadne, rýchlo a bezpečne.',
    ctaTry: 'Vyskúšať Galeidu',
    ctaNote: 'Registrácia sa otvorí čoskoro.',
    detailAlt: 'Obrazovka detailu klientky v aplikácii Galeida',
    galleryAlt: 'Galéria fotografií nechtov v aplikácii Galeida',
  },
  verticals: {
    title: 'Pre koho je Galeida',
    manicure: 'Manikúra',
    pedicure: 'Pedikúra',
    note: 'Ďalšie odbory pribúdajú.',
  },
  features: {
    sectionTitle: 'Funkcie',
    items: [
      {
        title: 'Pamätá si za vás',
        description: 'História návštev, poznámky aj preferencie na jednom mieste.',
      },
      {
        title: 'Fotky bez hľadania',
        description: 'Galéria prác a fotografie z návštev prehľadne pri klientke.',
      },
      {
        title: 'Pokračujte aj offline',
        description:
          'Pracujte aj bez internetu. Dáta sa bezpečne synchronizujú, keď ste online.',
      },
    ],
  },
  highlights: {
    sectionTitle: 'Prečo Galeida',
    items: [
      {
        title: 'Galeidu nainštalujete priamo z prehliadača',
        description: 'Bez Google Play a bez obchodu s aplikáciami.',
      },
      {
        title: 'Počas testovania bez poplatku',
        description: 'O cenách po skončení testovania vás budeme informovať vopred.',
      },
      {
        title: 'Dáta klientok chránime',
        description: 'Prístup k nim majú iba oprávnené osoby salónu.',
      },
    ],
  },
  story: {
    title: 'Vznikla priamo zo života v salóne.',
    body: 'Galeida vznikla pri riešení každodenných potrieb malého nechtového salónu. Cieľom bolo mať históriu návštev, poznámky a fotografie klientok vždy po ruke — jednoducho aj medzi klientkami.',
  },
  footer: {
    logo: 'galeida',
    email: 'ahoj@galeida.com',
    legalNavLabel: 'Právne informácie a kontakt',
    legal: {
      terms: 'Podmienky používania',
      privacy: 'Ochrana osobných údajov',
      contact: 'Kontakt',
    },
    billing: {
      companyName: 'Názov spoločnosti, s. r. o.',
      address: 'Adresa: PSČ Mesto',
      ico: 'IČO: [DOPLNIŤ]',
      dic: 'DIČ: [DOPLNIŤ]',
      icDph: 'IČ DPH: [DOPLNIŤ]',
    },
  },
} as const;
