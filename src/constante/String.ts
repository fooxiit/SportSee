/**
 * @description Constant object containing string literals used in the application
 */
const STRING = {
    FR: {
        ERROR: 'Oups... Une erreur est survenue !',
        ERRORS: {
            400: 'Les informations envoyées ne sont pas valides.',
            401: 'Veuillez vous connecter pour continuer.',
            403: 'Désolé, vous n’avez pas accès à cette page.',
            404: 'Les données demandées n’existent pas',
            500: 'Une erreur est survenue, merci de réessayer.',
            502: 'Problème temporaire, le service ne répond pas.',
            503: 'Service indisponible pour le moment.',
            504: 'Le serveur met trop de temps à répondre.',
        },
        TITLE: 'Boujour',
        CATCHPHRASE: 'Félicitation ! Vous avez explosé vos objectifs hier 👏',
        LINK: {
            HOME: 'Accueil',
            PROFIL: 'Profil',
            SETING: 'Réglage',
            COMUNITY: 'Communauté',
        },
        CHARTS: {
            DAILY: {
                TITTLE: 'Activité quotidienne',
                LEDGEND: {
                    WEIGHT: 'Poids (kg)',
                    BURN: 'Calories brûlées (kCal)',
                },
            },
            SESION_TIME: {
                TITLE: 'Durée moyenne des sessions',
            },
            STATS: {
                LEDGEND: {
                    INTENSITY: 'Intensité',
                    SPEED: 'Vitesse',
                    STRENGTH: 'Force',
                    ENDURANCE: 'Endurance',
                    ENERGY: 'Energie',
                    CARDIO: 'Cardio',
                },
            },
            SCORE: {
                TITLE: 'Score',
                LEDGEND: ['de votre', ['objectif']],
            },
        },
        INFO: {
            CAL: { NAME: 'Calories', UNIT: 'kCal' },
            PROT: { NAME: 'Proteines', UNIT: 'g' },
            GLUC: { NAME: 'Glucides', UNIT: 'g' },
            LIP: { NAME: 'Lipides', UNIT: 'g' },
        },
        COPIRIGHT: 'Copiryght, SportSee 2020',
    },
} as const;

export default STRING;
