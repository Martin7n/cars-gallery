import { html, render } from "lit";
import cars from "../api/cars";
import page from "page";

const rootElement = document.getElementById("appRoot");

const template = (submitHandler) =>
        html` 
        <form @submit=${(e) => submitHandler(e)}
            action="javascript:void(0);" method="" class="w-full md:w-4/5 xl:w-1/2 p-1 flex flex-col items-center mx-auto">
            <div class="w-full flex flex-col items-center">
                <!-- Image Preview or Upload -->
                <label for="image" class="w-full cursor-pointer">
                <img
                    id="preview"
                    class="w-[50vw] h-auto object-cover hover:grow hover:shadow-lg"
                    src="https://placehold.co/400x400?text=Preview"
                    alt="Car preview"
                />
                </label>
                <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                class="hidden"
                @change=${loadPreview}
                />

                <div class="pt-3 flex items-center justify-between w-full px-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Car Name"
                    class="carName w-2/3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black"
                    required
                />
                <svg
                    class="h-6 w-6 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758
                        c-2.353,2.363-2.352,6.059,0.002,8.412l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,
                        0.792-0.409l7.415-7.415c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754
                        C14.513,3.037,13.104,3.589,12,4.595z"
                    />
                </svg>
            </div>

                <input
                type="text"
                name="imageUrl"
                placeholder="image url"
                class="pt-1 w-full text-center text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black"
                required
                />

                <input
                type="text"
                name="power"
                placeholder="Power (e.g. 300hp)"
                class="pt-1 w-full text-center text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black"
                required
                />
                <input
                type="text"
                name="exclusivity"
                placeholder="Exclusivity"
                class="pt-1 w-full text-center text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black"
                required
                />

            <button
            type="submit"
            class="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
            Add Car
                </button>
            </div>
        </form>

`
async function submitHandler(event){

    const form = event.target;
    const formData = new FormData(form);
    const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
        const url = await uploadImage(imageFile);
        console.log('Uploaded Image URL:', url);
    }
    formData.delete("image");

    const carData = Object.fromEntries(formData);
    formData.delete("image");

    cars.addCar(carData)
    page.redirect('/gallery')

    // console.log(image, name, power, exclusivity)


}
function loadPreview(event) {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.onload = () => URL.revokeObjectURL(preview.src);
  }

export default function (ctx){

    ctx.render(template(submitHandler));

    // render(template(ctx), rootElement)
    

}

