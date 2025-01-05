function Loader() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex gap-4">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
}

export default Loader;
