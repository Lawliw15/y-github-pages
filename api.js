// api.js

// Function to fetch data from an API endpoint
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage of fetchData
const apiEndpoint = 'https://api.example.com/data'; // Replace with your actual API endpoint
fetchData(apiEndpoint).then(data => console.log(data));
