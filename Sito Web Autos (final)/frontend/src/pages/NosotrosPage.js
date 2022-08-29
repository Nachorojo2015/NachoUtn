const NosotrosPage = (props) => {
    return (
       <div>
         <section class="c-img">
            <img src="Img/about.png" alt=""/>
            <h4 class="c-h4">WELCOME TO OUR WEBSITE</h4>
            <h1 class="c-h1">#1 PLACE FOR ALL YOUR AUTOMOTIVE NEEDS</h1>
            <p class="c-p">Autozone is a leading digital automotive marketplace designed to connect vehicle buyers and
                sellers. Our
                website lets you research and compare new, certified and used cars by searching for body type, mileage,
                price and numerous other criteria.</p>
         </section>
          
         <div class="contenedor-testimonials">
             <h4>WORLD´S LEADING CAR DEALER</h4>
            <br/>
            <br/>
            <h2>WHY PEOPLE CHOOSE US</h2>
            <br/>
            <div class="contenedor-test">
                 <p> As a local, family-owned dealership, we understand the <br/> needs of our
                    customers, and we give back to our local <br/> community. We also offer great benefits to all our
                    <br/> customers, both new & returning. Feel free to check <br/> more reasons for becoming our client
                    and having a <br/> hassle-free buying experience.</p>
                <ul>
                    <a href="#"><span class="material-symbols-outlined">done</span>A wide range of affordable vehicles for everyone</a>
                    <a href="#"><span class="material-symbols-outlined">done</span>Certified vehicles of various types and sizes</a>
                    <a href="#"><span class="material-symbols-outlined">done</span>Lots of additional products and accessories</a>
                    <a href="#"><span class="material-symbols-outlined">done</span>Competitive freight options available to every client</a>
                </ul>
            </div>
        </div>
        <div class="container-parts">
            <div>
            <span class="material-symbols-outlined">directions_car</span><h3>1250</h3>
            <p>New cars in stock</p>
            </div>
            <div>
            <span class="material-symbols-outlined">car_rental</span><h3>2120</h3>
            <p>Used Cars in stock</p>
            </div>
            <div>
            <span class="material-symbols-outlined">mood</span><h3>9753</h3>
            <p>Happy Customers</p>
            </div>
            <div>
            <span class="material-symbols-outlined">construction</span><h3>1022</h3>
            <p>Car Spare Parts</p>
            </div>
        </div>

        <div class="container-3">
           <ul class="slider">
               <li id="slide1">
                   <img src="Img/chabon1.jpg" alt=""/>
                   <p><b>GEORGE SMITH</b>, customer, RANGE ROVER Owner</p>
                   <p>Autozone has nice cars, great prices, and good service. I brought my old Citroen C4 with which I had no problems after one month of high mileage use. High price given to me for my car and low price accepted for the car I was buying was a huge surprise to me. I recommend this car dealer to everyone!</p>
               </li>
               <li id="slide2">
                <img src="Img/chabon2.jpg" alt=""/>
                <p><b>JOHN DOE</b>, Customer, RANGE ROVER DISCOVERY Owner</p>
                <p>I’m glad to be a happy owner of my dream car, Range Rover Discovery, which I bought thanks to the recommendations of your consultants. The whole process of purchasing was very smooth and the price was not too high for me. I will definitely recommend this car dealer to all my friends.</p>
            </li>
            <li id="slide3">
                <img src="Img/mujer.jpg" alt=""/>
                <p><b>AMANDA RICHARDSON</b>, Customer, RANGE ROVER EVOQUE Owner</p>
                <p>You guys are really amazing! I have not yet seen a car dealer who offers so much at such an affordable price. I have found what I wanted in your vehicle catalog. Moreover, I have sold my old car with the help of your website and your staff provided me with the considerable discount for my new car.</p>
            </li>
           </ul>

           <ul class="menu">
               <li>
                   <a href="#slide1">1</a>
               </li>
               <li>
                <a href="#slide2">2</a>
            </li>
            <li>
                <a href="#slide3">3</a>
            </li>
           </ul>
        </div>
        </div>

        

        );
    }
    
    export default NosotrosPage;