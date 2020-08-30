export const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/teamzz111/teamzz111/vehicle/?_page=1&_limit=10'
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
