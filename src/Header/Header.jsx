import SearchBar from "../Components/SearchBar/SearchBar";

const Header = ({ onSearch }) => {
  return (
    <div className="h-[60vh] flex flex-col justify-center mt-4 bg-[url('/public/Resources/Rectangle-4281.png')] bg-slate-200 bg-blend-screen object-cover md:object-none">
      <h1 className="text-3xl text-center ">
        I Grow By Helping People In Need
      </h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Header;
