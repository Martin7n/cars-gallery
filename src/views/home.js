import { html, render } from 'lit';


const rootElement = document.getElementById("appRoot");
const home = (ctx) =>  
    html`
       <section class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style="max-width:1600px; height: 32rem; background-image: url('https://images.unsplash.com/photo-1529186405194-c57220dec7c0?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&w=1200&q=180');">
        
    <div class="container mx-auto">
    

    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
        <h1 class="text-white text-2xl my-4">Follow the road with...</h1>
        <a class="text-xl inline-block no-underline border-b border-yellow-600 leading-relaxed hover:text-white text-white hover:border-black" href="/gallery">Some of these</a>

    </div>

  </div>

      <div class="container mx-auto">
    <a href="/gallery"> <div class="w-[50px] h-[50px] rounded-full overflow-hidden">
      <img 
        src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1746779146~exp=1746782746~hmac=512349277e15f9705f3b13bf7e04de677d199d0d521dde2bec277e811c692286&w=996" 
        alt="Car"
        class="w-full h-full object-cover"
      />
      
    </div>
    
    </div>

</section>
    `;
  
  
  export default function homeRender(ctx){

    render(home(), rootElement)
}
  