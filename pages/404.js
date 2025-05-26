import Footer from "@/common/footer";
import Header from "@/common/header";
import { Fade, Zoom } from "react-reveal";
export default function Erorr() {
  return (
    <>
      <Header />
      <main className="Erorrpage">
        <Zoom top>
          <h1>404</h1>
        </Zoom>
        <Fade top>
          <h2>Error: 404 page not found</h2>
        </Fade>
        <Fade top>
          <p>Sorry, the page you're looking for cannot be accessed</p>
        </Fade>
      </main>
      <Footer />
    </>
  );
}
