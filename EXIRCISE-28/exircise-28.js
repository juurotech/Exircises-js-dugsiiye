function getSuccessMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Howsha si guul leh ayay u dhammaatay");
    }, 2000);
  });
}

async function fetchData() {
  try {
    const message = await getSuccessMessage(); 
    console.log(message); 
  } catch (error) {
    console.error(error);
  }
}

fetchData();
