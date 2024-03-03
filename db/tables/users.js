
const AVATAR_URL = 'https://www.gravatar.com/avatar/';
const IMG_URL = 'https://source.unsplash.com/random/';

export const USERS = [
    {
        id: 0,
        name: 'Luca Mack',
        email: 'l.mack@diakonie.at',
        telephone: '+43 123 456 789',
        shoppingCart: [],
        ADRESS: {
            city: 'Vienna',
            street: 'Mariahilferstraße 1',
            zip: '1060',
            top: '1',
            floor: '2'
        },
        PROFILE: {
            isPublic: false,
            avatar: `${AVATAR_URL}${0}?d=identicon`,
            titleImg: `${IMG_URL}${0}`,
            URLS: {
                website: 'https://www.diakonie.at',
                facebook: 'https://www.facebook.com/diakonie.at',
                twitter: 'https://twitter.com/diakonie_at',
                linkedin: 'https://www.linkedin.com/company/diakonie-austria',
                instagram: false
            },
        },
        ACCOUNT: {
            isPremium: false,
            isCustomer: true,
            isBusiness: false
        },
        PAYMENT: {
            PAYPAL: {
                email: 'luca.mack@diakonie.at',
            },
            CREDIT_CARD: {
                number: '1234 56789012 3456',
                expiration: '12/24',
                cvc: '123'
            },
            BANK_TRANSFER: null,
        }
    },
    {
        id: 1,
        name: 'Jane Doe',
        email: 'jd@mailiyo.xyz',
        telephone: '+43 123444489',
        shoppingCart: [],
        ADRESS: {
            city: 'New York',
            street: 'Brooklyn Street 1',
            zip: '12334211',
            top: '1',
            floor: '2'
        },
        PROFILE: {
            isPublic: false,
            avatar: `${AVATAR_URL}${0}?d=identicon`,
            titleImg: `${IMG_URL}${0}`,
            URLS: {
                website: 'https://www.wiyu.xyz',
                facebook: 'https://www.facebook.com/wiyu.xyz',
                twitter: 'https://twitter.com/wiyu_xyz',
                linkedin: 'https://www.linkedin.com/company/wiyu-xyz',
                instagram: false
            },
        },
        ACCOUNT: {
            isPremium: true,
            isCustomer: true,
            isBusiness: true
        },
        PAYMENT: {
            PAYPAL: {
                email: 'js@wiyu.xyz',
            },
            CREDIT_CARD: null,
            BANK_TRANSFER: {
                IBAN: 'AT123456789012345678',
                BIC: 'BKAUATWW'
            },
        }
    }
]
