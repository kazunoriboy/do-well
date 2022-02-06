const MainHeader: React.VFC = () => {
  return (
    <div className="l-main__header">
      <div className="c-pageTitle">Home</div>
      <form action="" method="get" className="c-searchBox">
        <svg
          className="c-searchBoxIcon w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input type="text" className="c-searchBoxInput" placeholder="Search" />
      </form>
      <div className="c-addButton u-ml-2">
        <svg
          className="c-addButtonIcon w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </div>
    </div>
  );
};

export default MainHeader;
