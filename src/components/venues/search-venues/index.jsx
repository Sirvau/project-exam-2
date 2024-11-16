function SearchBar() {
  return (
    <form className="flex flex-row items-center w-full">
      <input
        type="text"
        placeholder="Search location"
        className="w-full bg-modal py-1 ps-4 border-modal rounded-full ms-4 me-2"></input>
    </form>
  );
}

export default SearchBar;
