function getStoragedToken() {
  const token = localStorage.getItem("token");
  if (token) return JSON.parse(token).token;
  else return null;
}

const API_URL = "https://ayuda-ciudadana-api.vercel.app/api";

export async function fetchAPI(input: RequestInfo, init?: any) {
  const newInit = init || {};
  newInit.headers = newInit.headers || {};
  const token = getStoragedToken();

  if (token) {
    newInit.headers.authorization = "Bearer" + " " + token;
  }
  if (newInit.body) {
    newInit.body = JSON.stringify(newInit.body);
  }
  const res = await fetch(API_URL + input, newInit);
  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    return data;
  } else {
    return { error: res.status };
  }
}
