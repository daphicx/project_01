

function Home() {
  return (
  <>
  <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        We Work Around Data.
        <br/>
        <strong className="font-extrabold text-2x1 text-blue-900 sm:block"> Increase Your Productivity. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto"
          href="#"
        >
          View Portfolio
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-900 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-blue-800 sm:w-auto"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Home;