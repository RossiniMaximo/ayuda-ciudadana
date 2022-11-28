function getStoragedToken() {
  return localStorage.getItem("auth_token");
}

function setStoragedToken(data: { a: string | number }) {
  localStorage.setItem("auth_token", JSON.stringify(data));
}

const LOCAL_PORT = "http://localhost:3001/api";

export async function fetchAPI(input: RequestInfo, init?: any) {
  const newInit = init || {};
  newInit.headers || {};
  const token = getStoragedToken();
  if (token) {
    newInit.headers.authorization = "Bearer" + " " + token;
  }
  if (newInit.body) {
    newInit.body = JSON.stringify(newInit.body);
  }
  const res = await fetch(LOCAL_PORT + input, newInit);
  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    return data;
  } else {
    return { error: res.status };
  }
}
