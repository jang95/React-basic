import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

// const App = () => {
//   const [data, setData] = useState(null);
//   // 일반 axios
//   // const onClick = () => {
//   //   axios
//   //     .get('https://jsonplaceholder.typicode.com/todos/1')
//   //     .then((response) => {
//   //       setData(response.data);
//   //     });
//   // };

//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=28789fcecf524f2e8e75b1513d6479b1',
//       );
//       setData(response);
//     } catch (e) {
//       console.log('axios ERROR', e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
// };

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

export default App;
