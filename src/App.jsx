import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
/**
 * Renders the main application component
 * @returns {JSX.Element} The main application component
 */
const App = () => {
  return (
    <main className='relative'>
      {/* Render the navigation component */}
      <Nav />

      <section className='xl:padding-l wide:padding-r padding-b'>
        {/* Render the hero component */}
        <Hero />
      </section>

      <section className='padding'>
        {/* Render the popular products component */}
        <PopularProducts />
      </section>

      <section className='padding'>
        {/* Render the super quality component */}
        <SuperQuality />
      </section>

      <section className='padding-x py-10'>
        {/* Render the services component */}
        <Services />
      </section>

      <section className='padding'>
        {/* Render the special offer component */}
        <SpecialOffer />
      </section>

      <section className='bg-pale-blue padding'>
        {/* Render the customer reviews component */}
        <CustomerReviews />
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        {/* Render the subscribe component */}
        <Subscribe />
      </section>

      <section className=' bg-black padding-x padding-t pb-8'>
        {/* Render the footer component */}
        <Footer />
      </section>
    </main>
  );
};

export default App;