const baseURL = ""; // o process.env.VUE_APP_API_URL si no usas Vite

interface FetchOptions extends RequestInit {
  auth?: boolean; // si quieres usar el token o no (opcional)
}

async function getHttp<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.auth !== false && token
      ? { Authorization: `Bearer ${token}` }
      : {}),
  };

  const config: RequestInit = {
    method: "GET",
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${baseURL}${endpoint}`, config);

    if (!response.ok) {
      if (response.status === 401) {
        console.warn("Token expirado o inválido");
        localStorage.removeItem("token");
        // window.location.href = '/login';
      }

      const errorData = await response.json();
      throw new Error(errorData.message || "Error en la solicitud");
    }

    const data = await response.json();
    return data as T;
  } catch (error: any) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}

async function postFetch(
  url: string,
  options: FetchOptions = {},
  jwt: string,
  params: any
) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(params),
  });
}

export default { getHttp, postFetch };
