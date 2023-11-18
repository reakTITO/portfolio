import { Hero, About, Projects, Contact, Footer } from "../components";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
