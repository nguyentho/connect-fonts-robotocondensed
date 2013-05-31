const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-robotocondensed",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-robotocondensed",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-robotocondensed",
    "bugsurl": false
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },
  

  // Common font information
  "font_common": {
    "names": "roboto-boldcondensed,roboto-boldcondenseditalic,roboto-condensed,roboto-condenseditalic",
    "family": "Roboto",
    "copyright": "Font data copyright Google 2011",
    "trademark": "Roboto is a trademark of Google.",
    "url_vendor": "Google.com",
    "designer": "Google",
    "url_designer": "Christian Robertson"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "roboto-boldcondensed": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Roboto Bold Condensed", "Roboto-BoldCondensed" ]
      },
      "roboto-boldcondenseditalic": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Roboto Bold Condensed Italic", "Roboto-BoldCondensedItalic" ]
      },
      "roboto-condenseditalic": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Roboto Condensed Italic", "Roboto-CondensedItalic" ]
      },
      "roboto-condensed-regular": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Roboto Condensed", "Roboto-Condensed" ]
      }
  }
};
