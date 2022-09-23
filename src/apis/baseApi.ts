import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        'Content-type': 'application/json',
    },
});

const aaa = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

// const foo = async () => {
//     let toyData;
//     const data = await fetch();
//     const json = await data.json();

//     console.log(json);
// };

// const foo1 = async () => {
//   const axiosData = await aaa.get('localhost').then().
// };

// const fun2 = () =>  {
//     let dddd ;
//     let aaaa1 = await aaa.get()
//     let bbb2 = await aaa.post().then((res) => dddd = res.data))
//     console.log(dddd);

//     let ccc3 = aaa.post()

//     const data = await fetch();
//     const json = await data.json();

//     const data2 = fetch();
//     const json2 = data2.json();
// }
