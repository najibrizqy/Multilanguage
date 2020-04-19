const setLanguage = language => {
    let text = {};
    switch (language) {
      case 'en':
        text = Object.assign(text, require(`./../../i18n/en.json`));
        break;
      case 'kr':
        text = Object.assign(text, require(`./../../i18n/kr.json`));
        break;
      default:
      case 'id':
        text = Object.assign(text, require(`./../../i18n/id.json`));
        break;
    }
    return text;
  };
  
  const initialState = {
    locale: 'it',
    text: setLanguage('it')
  };
  
  const intlData = (state = initialState, action) => {
    if (action === undefined) return state;
    switch (action.type) {
      case 'UPDATE_LANGUAGE':
        return {
          locale: action.language,
          text: setLanguage(action.language)
        };
      default:
        return state;
    }
  };
  export default intlData;