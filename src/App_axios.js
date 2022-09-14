import { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
	const [data, setData] = useState(null);
	// const onClick = () => {
	// 	axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
	// 		setData(response.data);
	// 	});
	// };

	const onClick = async () => {
		try {
			const response = await axios.get(
				'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e63f02a67c564365bcd5c44062c8c3dd',
			);
			setData(response.data);
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<div>
			<div>
				<button onClick={onClick}>불러오기</button>	
			</div>
			{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
		</div>
	);
};

export default App;