// import fetch from "node-fetch";
import axios from "axios";

const getData = async (userID) => {
  //Odev fetch kullanarak

  // const user = await (await fetch('https://jsonplaceholder.typicode.com/users/' + userID)).json();
  // const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/' + userID)).json();

  
  //Odev axios kullanarak

  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userID
  );
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + userID
  );
  user.posts = { ...post };
  console.log(`User ${userID} `, user);
};

export default getData;
