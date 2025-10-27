export const fetchAboutData = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/about?populate=*");
    if (!response.ok) throw new Error("Failed to fetch about data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
