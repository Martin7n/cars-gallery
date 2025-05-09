import { html, render } from 'lit';

const rootElement = document.getElementById("appRoot");
const gallery = (car, ctx) =>  html`
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12" id="products"> 

            <div class="w-full md:w-4/5 xl:w-1/2 p-1 flex flex-col items-center mx-auto">
                <a href="#" class="w-full flex flex-col items-center">
                <img
                class="w-[50vw]  h-auto object-cover hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                alt="Car image"
                />
                <div class="pt-3 flex items-center justify-between w-full px-4">
                <p class="carName">${car.name}</p>
                <svg
                    class="h-6 w-6 fill-current text-gray-500 hover:text-black"
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
            <p class="pt-1 text-gray-900">£ ${car.power}</p>
            <p class="pt-1 text-gray-900">${car.exlusivity}</p>
        </a>
        </div>
        </div>

                `;

export default function detailsView(ctx){

    console.log(ctx.params.id)

    const car = {
        name: "A1",
        power: "200",
        exlusivity: "66"
    }

        render(gallery(car, ctx), rootElement)
    

};