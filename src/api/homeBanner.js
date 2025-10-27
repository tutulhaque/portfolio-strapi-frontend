export const fetchHomeData = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/home");
    if (!response.ok) throw new Error("Failed to fetch banner data");
    const data = await response.json();
    return data; // adjust if your data is nested
  } catch (error) {
    console.error(error);
    return null;
  }
};
