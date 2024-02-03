import { BASE_URL } from "../constants/api";

export default function fetchImages(q) {  
    const searchParams = new URLSearchParams({
      key: '42137546-386b5be41212ccd429cab5a80',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safeSearch: true,
    });
  
    const PARAMS = `?${searchParams}`;
    const url = BASE_URL + PARAMS;
  
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
      });
}