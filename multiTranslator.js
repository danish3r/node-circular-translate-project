require("dotenv").config();

const { Translate } = require("@google-cloud/translate").v2;
const inquirer = require("inquirer");
const translate = new Translate();

process.env.SECRET_KEY;

let langDict = {
  Arabic: "ar",
  Indonesian: "id",
  Chinese: "zh-cn",
  Bengali: "bn",
  German: "de"
};

async function translator(answer) {
  let arrLanguage = answer.languages;
  console.log("arrLanguages selected:" + arrLanguage);
  let text = answer.text;
  console.log("length: " + arrLanguage.length);
  for (let i = 0; i < arrLanguage.length; i++) {
    console.log("arrLang[i]:" + arrLanguage);
    console.log("text:" + text);
    translation = await translate.translate(text, langDict[arrLanguage[i]]);
    console.log("translation:" + translation);
    console.log("translation:" + translation[0]);
    console.log(
      `Translation after Language ${arrLanguage[i]}: ${translation[0]}`
    );
    text = translation[0];
  }
  translation = await translate.translate(text, "en");
  console.log(`Translation back to english: ${translation[0]}`);
}

var questions = [
  {
    message: "What do you want to translate?",
    type: "input",
    name: "text"
  },
  {
    message: "What languages do you want?",
    type: "checkbox",
    choices: ["Arabic", "Indonesian", "Chinese", "Bengali", "German"],
    name: "languages",
    validate: ans => ans.length > 0
  }
];
inquirer.prompt(questions).then(translator);

// TESTER
/* Hi domun, what are you doing for today? I was just going to ask if you are free today because MYWA has got an event today at
2pm.Do you want to come along? 
*/
//translator("I love to eat rice with chicken soup and fried shallots", 2);
//translator("Rifqi is enjoying his kebab right now", 3);
/* translator(
  "Mr Eddie is currently studying with me regarding his upcoming poster designing assignment"
); */

/*
async function translatorOLD(text, lang) {
  // this answer here will work with text and languages
  if (!lang) {
    // transalte to English -> Language 1 -> Language 2 -> Language 3 -> … -> English
    // let arrLanguage = ["ar", "id", "zh-cn"];
    let arrLanguage = ["ar", "id", "zh-cn"]; // needs work here
    console.log(arrLanguage);
    let translation = text;
    for (let i = 0; i < arrLanguage.length; i++) {
      translation = await translate.translate(text, arrLanguage[i]);
      console.log(`Translation after Language ${i + 1}: ${translation[0]}`);
      text = translation[0];
    }
    translation = await translate.translate(text, "en");
    console.log(`Translation back to english: ${translation[0]}`);
  } else {
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
    }
    let [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    text = translation;
    translation = await translate.translate(text, "en");
    console.log(`Translation back to english: ${translation[0]}`);
  }
}
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
