import Scene from '../components/Scene';
import Projects from '../components/Projects'; // Assuming your projects component is here

export default function HomePage() {
  return (
    <>
      <div className="scene-container">
        <Scene />
      </div>

      <main className="content">
        <section className="hero-section">
          <h1>David Kenji</h1>
          <p>Creative Software Developer</p>
        </section>
        
        {/* Your other components go here */}
        <Projects /> 
      </main>
    </>
  );
}