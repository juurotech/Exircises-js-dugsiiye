async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}


getUsers();
