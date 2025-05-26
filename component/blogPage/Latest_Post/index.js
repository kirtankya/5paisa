import BlogCard from "@/common/LatestBlogCard";
import Other_Blog_card from "@/common/otherBlogCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Latest_Post({ posts, pageSize, page }) {
  const [countDisplay, setCountDisplay] = useState(3);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [searchItem, setSearchItem] = useState("");
  const [categories, setCategories] = useState(posts);
  const [selectCategory, setSelectCategory] = useState("5 Paisa Blogs");
  const router = useRouter();

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const totalLatestBlogs = categories.length;
  const totalPages = Math.ceil(totalLatestBlogs / pageSize);

  useEffect(() => {
    setCurrentPage(parseInt(router.query.page) || 1);
  }, [router.query.page])

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`news-blog/?page=${page}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      router.push(`?page=${prevPage}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      router.push(`?page=${nextPage}`);
    }
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    const filteredData = posts?.filter((post) =>
      post?.attributes?.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setCategories(filteredData);
    setCurrentPage(1);
    router.push(`/news-blog/?search=${searchItem}&page=${page}`);
  };

  const uniqueCategories = Array.isArray(posts)
    ? [
      ...new Set(
        posts.flatMap(
          (post) => post?.attributes?.Category?.map((el) => el.name) || []
        )
      ),
    ]
    : [];

  const handleOnClick = (category) => {
    const filterData = posts?.filter((el) => {
      const categories = el?.attributes?.Category;
      return (
        categories && categories.length > 0 && categories[0]?.name === category
      );
    });
    setCategories(filterData);
    setSelectCategory(category);
    setCurrentPage(1);
    router.push(`news-blog/?category=${category}`);
  };

  return (
    <section className="latest_post">
      <div className="container">
        <form onSubmit={handleOnSubmit} className="search_Item">
          <input
            required
            type="search"
            name="search"
            placeholder="Search"
            onChange={handleSearch}
            value={searchItem}
            id=""
          />
          <button type="submit" className="search_Icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
            </svg>
          </button>
        </form>
        <div className="category_List">
          {uniqueCategories?.map((el, index) => {
            return (
              <button
                title={el}
                key={index}
                className={selectCategory === el ? "active" : ""}
                onClick={() => handleOnClick(el)}
              >
                {el}
              </button>
            );
          })}
        </div>
        <div className="latest_post_heading">
          {categories && categories.length > 0 ? (
            <h2 className="heading" title={selectCategory}>
              {selectCategory}
            </h2>
          ) : (
            <h2 className="heading" title={`Search Result For "${searchItem}"`}>
              Search Result For {`"${searchItem}"`}
            </h2>
          )}
        </div>
        {categories && categories.length > 0 ? (
          <div className="latest_post_grid_card">
            {categories
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map(({ attributes }, i) => {
                return <BlogCard BlogData={attributes} key={i} />;
              })}
          </div>
        ) : (
          <div className="No_Data_Found">
            <div className="no_data_Found">
              <h4 title="🧐No Data Found">🧐No Data Found</h4>
            </div>
          </div>
        )}
        {categories.length > pageSize && (
          <div className="pagination_controls">
            <button
              title="Prev"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
                title={i + 1}
              >
                {i + 1}
              </button>
            ))}
            <button
              title="Next"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        {/* <div
          className="latest_post_btn"
          onClick={() => setCountDisplay(countDisplay + 3)}
        >
          <button>Load more</button>
        </div> */}
        <div className="latest_post_heading">
          <h3 className="heading" title="Other Blogs">
            Other Blogs
          </h3>
          <div className="latest_post_grid_card">
            <Other_Blog_card />
          </div>
        </div>
      </div>
    </section>
  );
}
