export const fetchProjectData = async () => {
  try {
    const response = await fetch(
      "http://localhost:1337/api/project?populate=*"
    );
    if (!response.ok) throw new Error("Failed to fetch project data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
