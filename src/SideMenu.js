import SideMenuItem from "./SideMenuItem";

const SideMenu = (props) => {
	const createSideMenuItem = (list) => {
		return(
            <SideMenuItem
                number={list.id} 
                key={list.id}
                name={list.name}
                selectList={selectList}
                renameList={renameList}
            />
		);
	};

    const renameList = (id) => {
        props.myLists.forEach(list => {
            if (id === list.id) {
                const name = prompt("Nuevo nombre:");
                props.updateList({
                    list: list.list,
                    id: list.id,
                    name: name && name.trim() ? name : list.name
                });
            }
        });
    };

    const selectList = props.selectList;

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a 
                href="/" 
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <span className="fs-5">F5</span>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                {props.myLists.map((list) => createSideMenuItem(list))}
            </ul>
            <hr/>
        </div>
    );
};

export default SideMenu;
