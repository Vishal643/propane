import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<div>
			<ToastContainer />
			<Routes />
		</div>
	);
}

export default App;
