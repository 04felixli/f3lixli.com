import About from "./components/About/About";
import Layout from "./components/util/layout";
import Projects from "./projects/page";

export default function Home() {
  return (
    <Layout pageName="about">
      <About />
    </Layout>
  );
}
