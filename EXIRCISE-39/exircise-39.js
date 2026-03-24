async function translateText() {
  const input = document.getElementById("inputText").value;
  const fromLang = document.getElementById("fromLang").value;
  const toLang = document.getElementById("toLang").value;

  const url = `https://microsoft-translator-text-api3.p.rapidapi.com/largetranslate?to=${toLang}&from=${fromLang}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-rapidapi-key": "9f2a1a4ecemsh7556099e4b700f0p1bf79bjsn924633ae1756",
        "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sep: "|",
        text: input
      })
    });

    const data = await response.json();


    let result = data[0] || data.data || "Tarjumad lama helin";

    document.getElementById("outputText").innerText = result;

  } catch (error) {
    document.getElementById("outputText").innerText = "Error: API ma shaqeynayo";
    console.error(error);
  }
}