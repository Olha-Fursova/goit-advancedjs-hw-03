const apiKey = "53208176-1e9da6e5d5d5253b1447f8259";
const baseUrl = "https://pixabay.com/api/";

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  return fetch(`${baseUrl}?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}