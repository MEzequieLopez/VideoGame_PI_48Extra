function Paged({ handlerPaginate, allVideoGames, videoGames, currentPage }) {
    const totalPages = Math.ceil(allVideoGames / videoGames);
  
    const handlerBackClick = () => {
      if (currentPage > 1) {
        handlerPaginate(currentPage - 1);
      }
    };
    const handlerNextClick = () => {
      if (currentPage < totalPages) {
        handlerPaginate(currentPage + 1);
      }
  
    };
    return (
      <div>
        <button onClick={handlerBackClick} disabled={currentPage === 1}>
          Atras
        </button>
        <button onClick={handlerNextClick} disabled={currentPage === totalPages}>
          Adelante
        </button>
      </div>
    );
  }
  
  
  export default Paged;

