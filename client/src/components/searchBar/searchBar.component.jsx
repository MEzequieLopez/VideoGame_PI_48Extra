
function SearchBar({ handlerChange, handlerSubmit}) {
    return (
      <div >
        <form onSubmit={handlerSubmit} >
          <input type="search" onChange={ handlerChange} />
          <button type="submit"  >Search</button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;