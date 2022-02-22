export default function IntroComp() {
  return (
    <div className="header-container min-h-screen w-full flex flex-col items-center justify-center">
      <div className="text-right">
        <h1 className="text-6xl my-2 font-bold text-white">ברוכים הבאים</h1>
        <h1 className="text-6xl my-2 font-bold text-white">למרכז המידע  </h1>
        <h1 className="text-6xl my-2 font-bold text-white">למספרי רישוי כלי רכב</h1>
      </div>
      <a href="#SearchSection">
        <button className="search-button shadow-lg shadow-cyan-600/80 bottom-5 left-50 rounded-3xl border-solid border-2 border-black bg-teal-500 h-24 w-20 absolute cursor-pointer "></button>
      </a>
    </div>
  )
}
