const BASE_URL = 'http://localhost:3000/data';

const fetchTableData = () => {
    return fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export default fetchTableData;

