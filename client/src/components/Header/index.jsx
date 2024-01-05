// may need to import useFunctions from react-router-dom if need be, and add react-router-dom to package.json 

const Header = () => {
    return (
        <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h1 className="m-0">Christmas Cookie Clicker Tycoon</h1>
            </div>
        </header>
    );
};

export default Header;
