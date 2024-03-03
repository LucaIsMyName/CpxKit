const AVATAR_URL: string = "https://www.gravatar.com/avatar/";
const IMG_URL: string = "https://source.unsplash.com/random/";

interface User {
  id: number;
  name: string;
  email: string;
  telephone: string;
  shoppingCart: Object;
  address: {
    city: string;
    street: string;
    zip: string;
    top: string;
    floor: string;
  };
  profile: {
    isPublic: boolean;
    avatar: string;
    titleImg: string;
    urls: {
      website: string | false;
      facebook: string | false;
      twitter: string | false;
      linkedin: string | false;
      instagram: string | false;
    };
  };
  account: {
    isPremium: boolean;
    isCustomer: boolean;
    isBusiness: boolean;
  };
  payment: {
    paypal: {
      email: string;
    };
    creditCard: {
      number: string;
      expiration: string;
      cvc: string;
    } | false;
    bankTransfer: {
      iban: string;
      bic: string;
    } | false;
  };
}

const users: User[] = [
  {
    id: 0,
    name: "Luca Mack",
    email: "l.mack@diakonie.at",
    telephone: "+43 123 456 789",
    shoppingCart: [],
    address: {
      city: "Vienna",
      street: "Mariahilferstraße 1",
      zip: "1060",
      top: "1",
      floor: "2",
    },
    profile: {
      isPublic: false,
      avatar: `${AVATAR_URL}${0}?d=identicon`,
      titleImg: `${IMG_URL}${0}`,
      urls: {
        website: "https://www.diakonie.at",
        facebook: "https://www.facebook.com/diakonie.at",
        twitter: "https://twitter.com/diakonie_at",
        linkedin: "https://www.linkedin.com/company/diakonie-austria",
        instagram: false,
      },
    },
    account: {
      isPremium: false,
      isCustomer: true,
      isBusiness: false,
    },
    payment: {
      paypal: {
        email: "luca.mack@diakonie.at",
      },
      creditCard: {
        number: "1234 56789012 3456",
        expiration: "12/24",
        cvc: "123",
      },
      bankTransfer: false,
    },
  },
  {
    id: 1,
    name: "Jane Doe",
    email: "jd@mailiyo.xyz",
    telephone: "+43 123444489",
    shoppingCart: [],
    address: {
      city: "New York",
      street: "Brooklyn Street 1",
      zip: "12334211",
      top: "1",
      floor: "2",
    },
    profile: {
      isPublic: false,
      avatar: `${AVATAR_URL}${1}?d=identicon`,
      titleImg: `${IMG_URL}${1}`,
      urls: {
        website: "https://www.wiyu.xyz",
        facebook: "https://www.facebook.com/wiyu.xyz",
        twitter: "https://twitter.com/wiyu_xyz",
        linkedin: "https://www.linkedin.com/company/wiyu-xyz",
        instagram: false,
      },
    },
    account: {
      isPremium: true,
      isCustomer: true,
      isBusiness: true,
    },
    payment: {
      paypal: {
        email: "js@wiyu.xyz",
      },
      creditCard: false,
      bankTransfer: {
        iban: "AT123456789012345678",
        bic: "BKAUATWW",
      },
    },
  },
];

export { users };
