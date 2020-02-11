# multiTranslator

## Setup

```
The main function of this project is for the user to put in an input text and 
select a few languages given as checkboxes to be used for translating the text 
several times before printing on the console as an English translation.

To construct this function we require two important modules:
1. A google translation module, using Cloud Translation API, that can be found 
on github, link: https://github.com/googleapis/nodejs-translate
2. The Inquierer module to help us ask the user what text would they want to be 
translated to and a few language options that the user can choose to translated 
the given text to,link: https://www.npmjs.com/package/inquirer#examples

Apart from the modules, the translation also needs us to connect to the Google 
Cloud Platform project and set up authentication with our service account so we
can access the API from our local workstation. Connecting to our project with the
authentication key given by the service provider, we use "dotenv" module, 
link: https://www.npmjs.com/package/dotenv.

The reason why we used a dictionary here is because the google-translate function 
uses acronyms for each language as an input. So to make it easier for the user to 
choose the languages provided, we uses a dictionary to point each acronyms to its 
respective language representation.
```

## Start

```
Once we load the file, it will asks the user for a text to be translated and 
followed by choices of language for the text's multi-language translation
```

<div style="width:100%;height:0;padding-bottom:126%;position:relative;"><iframe src="https://giphy.com/embed/jUFIld6xgz1aOYDTsI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/jUFIld6xgz1aOYDTsI">via GIPHY</a></p>
