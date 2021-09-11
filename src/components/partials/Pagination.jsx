import ReactPaginate from "react-paginate";
import Row from "react-bootstrap/Row";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <Row className="g-0 my-5">
      <ReactPaginate
        containerClassName="col rounded text-white d-flex justify-content-center"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        activeClassName="btn btn-dark text-white"
        breakClassName="btn"
        pageClassName="btn text-white"
        previousClassName="list-unstyled"
        previousLinkClassName="btn btn-dark me-2"
        nextClassName="list-unstyled"
        nextLinkClassName="btn btn-dark ms-2"
        initialPage={page.page - 1}
        pageCount={totalPages}
        onPageChange={(currentPage) =>
          setPage({ page: currentPage.selected + 1 })
        }
      />
    </Row>
  );
};

export default Pagination;
