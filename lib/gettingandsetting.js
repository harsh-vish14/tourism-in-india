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
