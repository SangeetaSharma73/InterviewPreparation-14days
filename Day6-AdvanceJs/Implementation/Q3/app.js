// Function to fetch data from the public API using async/await
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts"; // Public API URL

  try {
    // Make the fetch request
    const response = await fetch(url);

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Display the data in the console (or manipulate it as needed)
    console.log("Fetched Data:", data);

    // Example of displaying data in the DOM (in case you want to render it to HTML)
    const listContainer = document.getElementById("data-list");
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Title: ${item.title}`;
      listContainer.appendChild(listItem);
    });
  } catch (error) {
    // Catch any errors that occur during the fetch or data handling process
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching the data.");
  }
}

// Call the fetchData function when the window is loaded
window.onload = () => {
  fetchData();
};
