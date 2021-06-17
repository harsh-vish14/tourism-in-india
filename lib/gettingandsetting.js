export const SignInLink = async (SignData) => {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify(SignData),
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.AUTH_KEY,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      status: "error",
      data,
    };
  }
  return { status: "success", data };
};

export const getStatesCardData = async () => {
  const res = await fetch(`http://localhost:3000/api/states`);
  const data = await res.json();
  if (!res.ok) {
    return [];
  }
  return data;
};

export const getStateByName = async (statename) => {
  const res = await fetch(`http://localhost:3000/api/states/${statename}`);
  const data = await res.json();
  if (!res.ok) {
    return { status: "error", data };
  }
  return { status: "success", data };
};
