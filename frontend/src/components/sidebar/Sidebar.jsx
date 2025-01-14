import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className= "no-borderRadiusImportant flex flex-col" style={{ border: '2px solid black', borderRadius: '10px',padding: '10px'}}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar; // ' border border-black p-4 flex flex-col'