import './App.css';
import sedan from './images/sedan.jpg'
import sports from './images/sports.jpg'
import stationwagon from './images/stationwagon.jpg'
import coupe from './images/coupe.jpg'
import Car from './car';

function App() {
  return (
    <div className="App">
      <h1>TYPE OF VEHICLES</h1>
      <header className="App-header">
        <Car id = {1} 
        image = {sedan} 
        name = "Sedan" 
        des = "A sedan has four doors and a traditional trunk. Like vehicles in many categories, they're available in a range of sizes from small (subcompact vehicles like Nissan Versa and Kia Rio) to compacts (Honda Civic, Toyota Corolla) to mid-size (Honda Accord, Nissan Altima), and full-size (Toyota Avalon, Dodge Charger). Luxury brands like Mercedes-Benz and Lexus have sedans in similar sizes as well." />
        <Car id = {2} image = {coupe} name = "Coupe" 
        des = "A coupe has historically been considered a two-door car with a trunk and a solid roof. This would include cars like a Ford Mustang or Audi A5—or even two-seat sports cars like the Chevrolet Corvette and Porsche Boxster. Recently, however, car companies have started to apply the word 'coupe' to four-door cars or crossovers with low, sleek rooflines that they deem 'coupe-like.' " />
        <Car id = {3} image = {sports} name = "Sports Car"
         des = "These are the sportiest, hottest, coolest-looking coupes and convertibles—low to the ground, sleek, and often expensive. They generally are two-seaters, but sometimes have small rear seats as well. Cars like the Porsche 911 and Mazda Miata are typical sports cars, but you can stretch the definition to include muscle cars like the Ford Mustang and Dodge Challenger." />
        <Car id = {4} image = {stationwagon} name = "Station Wagon" 
        des = "Wagons are similar to sedans but have an extended roofline and a hatch door at the rear instead of a trunk. Some, like the Subaru Outback or Audi A4 Allroad, have elevated ground clearance and some rugged body cladding to make them more like a sport-utility vehicle (SUV), but they are nonetheless closely related to sedans. " />
      </header>
    </div>
  );
}

export default App;
