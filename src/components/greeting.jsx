export default function Greeting() {
  return (
    <>
      <div className="bg-rose-700/50 px-8 py-4 rounded-sm">
        <div className="flex flex-col gap-y-4 items-start">
          <h1 className="text-4xl font-medium">Pranith Molakalapalli</h1>
          <h2 className="text-lg font-medium">
            Officer at <a target="_blank" className="font-bold hover:text-zinc-400 transition-colors duration-200 ease-in-out" href="https://www.codedevils.org">CodeDevils</a> and SWE at{" "}
            <a className="font-bold hover:text-zinc-400 transition-colors duration-200 ease-in-out" href="https://www.effinity.ca">Effinity</a>
          </h2>
        </div>
      </div>
    </>
  );
}
