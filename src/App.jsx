import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container h-screen items-center mx-auto flex flex-row gap-5"
    >
      {[1, 2, 3].map((a, i) => (
        <motion.div
          className="border overflow-hidden relative shadow-xl cursor-pointer group w-full md:w-80 md:h-50"
          key={a}
          initial={{
            opacity: 0,
            translateX: -50,
            translateY: i % 2 === 0 ? -150 : 150,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.3 }}
        >
          <img
            className="object-center group-hover:opacity-95"
            src="http://shanereact.ibthemespro.com/img/portfolio/1.jpg"
          />
          <div className="absolute translate-y-full group-hover:translate-y-0 group-hover:transition group-hover:delay-150 ease-in-out flex justify-between px-3 py-3 bottom-0 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-60 bg-slate-300 w-full">
            <h2 className="text-lg font-bold">My Story</h2>
            <p className="font-semibold">Design</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default App;
