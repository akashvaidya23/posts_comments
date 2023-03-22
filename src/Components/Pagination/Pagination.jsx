import react from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example" style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {pageNumbers.map((number) => (
          <div key={number}>
            <button
              onClick={() => {
                paginate(number);
              }}
              href="#"
              className="btn btn-primary"
              style={{ backgroundColor: "black", color: "#fff" }}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
