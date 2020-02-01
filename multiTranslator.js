const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate();

async function translator(text, lang) {
  switch (lang) {
    case 1:
      // transalte to arabic
      target = "ar";
      break;
    case 2:
      // transalte to indonesion
      target = "id";
      break;
    case 3:
      // transalte to chinese
      target = "zh-cn";
      break;
    default:
      // transalte to English -> Language 1 -> Language 2 -> Language 3 -> … -> English
      let [translation] = await translate.translate(text, ar);
      console.log(`Text: ${text}`);
      console.log(`Translation: ${translation}`);
      return true;
  }
  let [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

translator("I love to eat rice with chicken soup and fried shallots", 1);

/**
   * TODO(developer): Uncomment the following line before running the sample.
   
  // const projectId = 'YOUR_PROJECT_ID';

  // Imports the Google Cloud client library
  const {Translate} = require('@google-cloud/translate').v2;

  // Instantiates a client
  const translate = new Translate({projectId});

  async function quickStart() {
    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'ru';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }

  quickStart();
*/

// we want to create translator, so there will be two arguments
// first will be the sentence/word
// second(optional) will be the langauge selection that will be translated
//      there is only three options available
// the result is:
//      default: English -> Language 1 -> Language 2 -> Language 3 -> … -> English
//      lang_select: English -> Language 1
/*
'auto': 'Automatic',
'af': 'Afrikaans',
'sq': 'Albanian',
'am': 'Amharic',
'ar': 'Arabic',
'hy': 'Armenian',
'az': 'Azerbaijani',
'eu': 'Basque',
'be': 'Belarusian',
'bn': 'Bengali',
'bs': 'Bosnian',
'bg': 'Bulgarian',
'ca': 'Catalan',
'ceb': 'Cebuano',
'ny': 'Chichewa',
'zh-cn': 'Chinese Simplified',
'zh-tw': 'Chinese Traditional',
'co': 'Corsican',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'et': 'Estonian',
'tl': 'Filipino',
'fi': 'Finnish',
'fr': 'French',
'fy': 'Frisian',
'gl': 'Galician',
'ka': 'Georgian',
'de': 'German',
'el': 'Greek',
'gu': 'Gujarati',
'ht': 'Haitian Creole',
'ha': 'Hausa',
'haw': 'Hawaiian',
'iw': 'Hebrew',
'hi': 'Hindi',
'hmn': 'Hmong',
'hu': 'Hungarian',
'is': 'Icelandic',
'ig': 'Igbo',
'id': 'Indonesian',
'ga': 'Irish',
'it': 'Italian',
'ja': 'Japanese',
'jw': 'Javanese',
'kn': 'Kannada',
'kk': 'Kazakh',
'km': 'Khmer',
'ko': 'Korean',
'ku': 'Kurdish (Kurmanji)',
'ky': 'Kyrgyz',
'lo': 'Lao',
'la': 'Latin',
'lv': 'Latvian',
'lt': 'Lithuanian',
'lb': 'Luxembourgish',
'mk': 'Macedonian',
'mg': 'Malagasy',
'ms': 'Malay',
'ml': 'Malayalam',
'mt': 'Maltese',
'mi': 'Maori',
'mr': 'Marathi',
'mn': 'Mongolian',
'my': 'Myanmar (Burmese)',
'ne': 'Nepali',
'no': 'Norwegian',
'ps': 'Pashto',
'fa': 'Persian',
'pl': 'Polish',
'pt': 'Portuguese',
'ma': 'Punjabi',
'ro': 'Romanian',
'ru': 'Russian',
'sm': 'Samoan',
'gd': 'Scots Gaelic',
'sr': 'Serbian',
'st': 'Sesotho',
'sn': 'Shona',
'sd': 'Sindhi',
'si': 'Sinhala',
'sk': 'Slovak',
'sl': 'Slovenian',
'so': 'Somali',
'es': 'Spanish',
'su': 'Sundanese',
'sw': 'Swahili',
'sv': 'Swedish',
'tg': 'Tajik',
'ta': 'Tamil',
'te': 'Telugu',
'th': 'Thai',
'tr': 'Turkish',
'uk': 'Ukrainian',
'ur': 'Urdu',
'uz': 'Uzbek',
'vi': 'Vietnamese',
'cy': 'Welsh',
'xh': 'Xhosa',
'yi': 'Yiddish',
'yo': 'Yoruba',
    'zu': 'Zulu'
*/
