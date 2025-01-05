const apiUrl = "https://cors-anywhere.herokuapp.com/https://tycoon-2epova.users.cfx.re/status/sotd.json";

const apiKey = "qqHewKb0fxvFERGrbDuO7eShDEyX0Kr2jFEnY"; // Replace with your API key

async function fetchSOTD() {
  try {
    const response = await fetch(apiUrl, {
      headers: { "X-Tycoon-Key": apiKey },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displaySOTD(data);
  } catch (error) {
    document.querySelector(".sotd").innerHTML = `<p>Error: ${error.message}</p>`;
    console.error("Error fetching SOTD:", error);
  }
}

function displaySOTD(data) {
  const sotdContainer = document.querySelector(".sotd");
  sotdContainer.innerHTML = `
    <p><strong>Skill:</strong> ${data.short}</p>
    <p><strong>Bonus:</strong> ${data.bonus}%</p>
    <p><em>Last Updated: ${new Date().toLocaleString("en-GB", {
      timeZone: "GMT",
    })} GMT</em></p>
  `;
}

// Fetch SOTD on page load
fetchSOTD();
