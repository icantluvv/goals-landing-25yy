function BackgroundCircles() {
  return (
    <>
      <div
        className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px]
      xl:w-[2000px] xl:h-[2000px] rounded-[50%] left-[-70vw] top-[-75vh] absolute bg-[#4A69A3]/76 blur-[100px] move-slow"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px]
      xl:w-[1560px] xl:h-[1560px] rounded-[50%] lg:left-[30vw] lg:top-[-100vh] absolute bg-[#627DB1]/46 blur-[100px] lg:move-medium"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[750px] md:h-[750px]
      xl:w-[1283px] xl:h-[1283px] rounded-[50%] left-[calc(70%-641px)] top-[-50vh] absolute bg-[#8EA8DB]/40 blur-[100px] move-fast"
      ></div>
    </>
  )
}

export default BackgroundCircles