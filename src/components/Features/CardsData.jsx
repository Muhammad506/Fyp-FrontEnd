function CardsData({ image, title, content }) {
  return (
    <main className="flex justify-center items-center p-4">
      <div className="max-w-[370px] h-[420px] bg-white rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-full rounded-t-lg object-cover transition-transform duration-300 transform"
        />
        <div className="p-4">
          <h1 className="md:text-xl text-base font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
            {title}
          </h1>
          {/* Horizontal line between title and content */}
          <hr className="my-2 border-gray-300" />
          <p className="mt-3 text-sm text-gray-600">{content}</p>
        </div>
      </div>
    </main>
  );
}

export default CardsData;
