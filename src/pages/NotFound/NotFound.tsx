import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { HiOutlineEmojiSad } from 'react-icons/hi';

const NotFound= () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br bg-white px-6 py-12 ">
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Иконка */}
        <div className="relative mb-8">
          <HiOutlineEmojiSad className="h-32 w-32 text-indigo-500 dark:text-indigo-400" />
          <FaExclamationTriangle className="absolute -right-2 -top-2 h-10 w-10 animate-pulse text-amber-500" />
        </div>

        {/* Код ошибки */}
        <h1 className="mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-7xl font-extrabold text-transparent sm:text-9xl">
          404
        </h1>

        {/* Заголовок */}
        <h2 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">
          Page Not Found
        </h2>

        {/* Описание */}
        <p className="mb-8 max-w-md text-base text-slate-600 sm:text-lg dark:text-slate-400">
       Unfortunately, the page you are looking for does not exist or has been moved. Check the address or return to the homepage.
        </p>

        {/* Кнопки */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-95"
          >
            <FaHome className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
           Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-300/50 active:scale-95 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-700"
          >
            <FaArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;