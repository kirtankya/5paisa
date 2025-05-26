import Blog_Info_Card from "@/common/BlogInfoCard";
import GetIntoTechCard from "@/common/getIntoTechCard";
import { useState } from "react";

export default function GetIntoTech({ films, error, contries, Page }) {
  const [countDisplay, setCountDisplay] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchItems = Page?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate the indices of the items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filterPage = searchItems;
  const currentItems = Array.isArray(filterPage)
    ? filterPage.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil(filterPage?.length / itemsPerPage);
  // search functionality

  const handleOnchange = (ev) => {
    // setCurrentPage(1);
    setSearch(ev.target.value);
  };

  const handleOnclick = () => {
    setCurrentPage(1);
  };

  return (
    <section className="get_into_tech">
      <div className="container">
        <div className="get_into_tech_heading">
          <h2 className="heading">Get into tech</h2>
        </div>
        <div className="get_into_tech_card_main">
          <GetIntoTechCard countDisplay={countDisplay} />
        </div>
        <div
          className="get_into_tech_btn"
          onClick={() => setCountDisplay(countDisplay + 3)}
        >
          <button>Load more</button>
        </div>
        <div className="get_into_tech_heading">
          <h1 className="heading" title="Blog Info Card">
            Blog Info Card
          </h1>
        </div>
        <div className="get_into_tech_card_main">
          <Blog_Info_Card countDisplay={countDisplay} films={films} error={error} />
        </div>
        <div
          className="get_into_tech_btn"
          onClick={() => setCountDisplay(countDisplay + 3)}
        >
          <button>Load more</button>
        </div>
        <div className="get_into_tech_heading">
          <h1 className="heading" title="Contries Data">
            Contries Data
          </h1>
        </div>
        <div className="main">
          <table>
            <thead>
              <tr>
                <>
                  <th title="Name">Name</th>
                </>
                <>
                  <th title="Code">Code</th>
                </>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(contries) &&
                contries.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td title={el.name}>{el.name}</td>
                      <td title={el.code}>{el.code}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
