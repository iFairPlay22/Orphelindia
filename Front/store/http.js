export const state = () => ({
    // LANG
    lang: {
      languages: ["fr", "en"],
      currentIndex: 1
    },
    // HTTP
    http: {
      baseUrl:  "http://localhost:5000", // "https://orphelindia-back.netlify.com",
      token : null
    },
    // STORED DATA
    storedData: null
  });
  
  export const getters = {
    // LANG
    getAllLangs(state) {
      return state.lang.languages;
    },
    getCurrentLang(state) {
      return state.lang.languages[state.lang.currentIndex];
    },
    // HTTP
    getBaseUrl(state) {
        return state.http.baseUrl
    },
    getToken(state) {
        return state.http.token
    },
    isAdmin(state) {
      return state.http.token != null
    },
    getStoredData(state) {
      return state.storedData;
    }
  };
  
  export const mutations = {
    // LANG
    setLang(state, language) {
      const index = state.lang.languages.indexOf(language);
      if (index == -1) return;
      state.lang.currentIndex = index;
    },
    // AUTH
    logIn(state, token) {
      state.http.token = token;
    },
    logOut(state) {
      state.http.token = null;
    },
    setToken(state, token) {
      state.http.token = token
      console.log(token)
    },
    setStoredData(state, { header, footer, common }) {
      state.storedData = { header: header, footer: footer, common : common };
    }
  };
  
  export const actions = {
    // HTTP
    httpReq(context, { url, data, fetchCallback, errorCallback, pageRequest=false }) {
  
      const baseUrl  = this.getters["http/getBaseUrl"];
      const language = this.getters["http/getCurrentLang"];
      const token    = this.getters["http/getToken"];
      
      const fetchUrl = `${baseUrl}/${url}`;
  
      let body = { lang : language, token : token, ...data };
  
      const fetchObj = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body),
        redirect: "follow"
      };
  
      fetch(fetchUrl, fetchObj)
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(response => {
            if (pageRequest) context.commit("setStoredData", response);
            if (fetchCallback) fetchCallback(response)
        })
        // .catch(error => {
        //   if (errorCallback) errorCallback(error);
        // })
    },
  };