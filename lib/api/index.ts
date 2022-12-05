const API_URL = "https://ayuda-ciudadana-api.vercel.app/api";

async function fetchAPI(path: string, props: RequestInit, auth?: boolean) {
  try {
    var token = "";
    if (typeof window != "undefined")
      token = JSON.parse(localStorage.getItem("token") || "0").token;

    const res = await fetch(API_URL + path, {
      ...props,
      headers: auth
        ? {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json",
          }
        : undefined,
    });

    if (res.status < 300 && res.status >= 200) return await res.json();
    throw { error: "estado fuera de 2xx", res, status: res.status };
  } catch (error) {
    throw error;
  }
}

export async function sendAuthCode(email: string) {
  try {
    const body = JSON.stringify({ email });
    await fetchAPI("/auth", {
      method: "POST",
      body,
    });

    return true;
  } catch (error) {
    return false;
  }
}

export async function getToken(email: string, code: number) {
  try {
    const body = JSON.stringify({ email, code });
    const response = await fetchAPI("/auth/token", {
      method: "POST",
      body,
    });
    const tokenToSave = JSON.stringify({ email, token: response.message });
    localStorage.setItem("token", tokenToSave);

    return true;
  } catch (error) {
    return false;
  }
}

export async function getUserInfo() {
  try {
    const response = await fetchAPI(
      "/me",
      {
        method: "GET",
      },
      true
    );

    return response;
  } catch (error) {
    console.log(error);

    return false;
  }
}

export async function updateUserInfo(name: string) {
  try {
    return await fetchAPI(
      "/me",
      {
        method: "PATCH",
        body: JSON.stringify({ full_name: name }),
      },
      true
    );
  } catch (error) {
    return false;
  }
}
