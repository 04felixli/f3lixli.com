import About from "./components/About/About";
import { Pages } from "./components/NavBar/NavBar";
import Layout from "./components/util/layout";
import Projects from "./projects/page";

export default function Home() {
  return (
    <Layout currentPage={Pages.about} pageName="about">
      <About />
    </Layout>
  );
}
