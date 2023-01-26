// import img1 from "../../images/img1.jpg";

export default function Card() {
  return (
    <main>
      <div class="bg-gray-100 w-full lg:px-20 min-h-screen gap-4 flex-wrap flex justify-center items-center">
        {/* card 1 */}
        <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* <img class=" object-cover rounded-xl" src={img1} alt="" /> */}
          <div class="p-2">
            <h2 class="font-bold text-lg mb-2">Heading</h2>

            <p class="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
          </div>

          <div class="m-2">
            <a role="button" href="#" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
              Learn More
            </a>
          </div>
        </div>
        {/* card 1 */}
      </div>
    </main>
  );
}
