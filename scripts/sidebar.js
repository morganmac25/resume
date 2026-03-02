
const gateway = `https://wnw9j7xpd3.execute-api.us-east-2.amazonaws.com/count`;

async function updateCounter() {
    try {
        const response = await fetch(gateway, {});

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        document.getElementById("counter").textContent =  `${data.count}`;

    } catch (error) {
        console.error("Error fetching counter:", error);
        document.getElementById("counter").textContent = "Error";
    }
}

updateCounter();
