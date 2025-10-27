export const fetchBlogData = async () => {
  try {
    const response = await fetch(
      "http://localhost:1337/api/articles?populate=*"
    );
    if (!response.ok) throw new Error("Failed to fetch blog data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
