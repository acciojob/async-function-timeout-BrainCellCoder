//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    const output = document.getElementById("output");

    if (text === "" || isNaN(delay)) {
        output.textContent = "Please provide both text and delay.";
        return;
    }

    output.textContent = "Waiting...";

    await new Promise((resolve) => setTimeout(resolve, delay));

    output.textContent = text;
});
