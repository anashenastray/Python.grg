import Header from './header';
import Hero from './hero';
import EventList from './EventList';
import Footer from './footer';

export default function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Hero />
        <EventList />
      </main>
      <Footer />
    </div>
  );
}
