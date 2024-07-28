import Argentina from "./assets/argentina.jpg";
import Australia from "./assets/australia.jpg";
import Bahamas from "./assets/bahamas.jpg";
import Brazil from "./assets/brazil.jpg";
import Canada from "./assets/canada.jpg";
import China from "./assets/china.jpg";
import Colombia from "./assets/colombia.jpg";
import CostaRica from "./assets/costa rica.jpg";
import Dominican from "./assets/dominican.jpg";
import Egypt from "./assets/egypt.jpg";
import France from "./assets/france.jpg";
import Greece from "./assets/greece.jpg";
import HongKong from "./assets/hong kong.jpg";
import India from "./assets/india.jpg";
import Indonesia from "./assets/indonesia.jpg";
import Israel from "./assets/israel.jpg";
import Italy from "./assets/italy.jpg";
import Japan from "./assets/japan.jpg";
import Korea from "./assets/korea.jpg";
import Malaysia from "./assets/malaysia.jpg";
import Mexico from "./assets/mexico.jpg";
import Morocco from "./assets/morocco.jpg";
import Qatar from "./assets/qatar.jpg";
import Singapore from "./assets/singapore.jpg";
import Spain from "./assets/spain.jpg";
import Thailand from "./assets/thailand.jpg";
import Turkey from "./assets/turkey.jpg";
import UAE from "./assets/uae.jpg";
import USA from "./assets/USA.jpg";
import Vietnam from "./assets/vietnam.jpg";
import Filter from "./Filter";

const countriesList = [
    { name: 'Argentina', src: Argentina, text: 'Argentina' },
    { name: 'Australia', src: Australia, text: 'Australia' },
    { name: 'Bahamas', src: Bahamas, text: 'Bahamas' },
    { name: 'Brazil', src: Brazil, text: 'Brazil' },
    { name: 'Canada', src: Canada, text: 'Canada' },
    { name: 'China', src: China, text: 'China' },
    { name: 'Colombia', src: Colombia, text: 'Colombia' },
    { name: 'Costa Rica', src: CostaRica, text: 'Costa Rica' },
    { name: 'Dominican Republic', src: Dominican, text: 'Dominican Republic' },
    { name: 'Egypt', src: Egypt, text: 'Egypt' },
    { name: 'France', src: France, text: 'France' },
    { name: 'Greece', src: Greece, text: 'Greece' },
    { name: 'Hong Kong', src: HongKong, text: 'Hong Kong' },
    { name: 'India', src: India, text: 'India' },
    { name: 'Indonesia', src: Indonesia, text: 'Indonesia' },
    { name: 'Israel', src: Israel, text: 'Israel' },
    { name: 'Italy', src: Italy, text: 'Italy' },
    { name: 'Japan', src: Japan, text: 'Japan' },
    { name: 'South Korea', src: Korea, text: 'South Korea' },
    { name: 'Malaysia', src: Malaysia, text: 'Malaysia' },
    { name: 'Mexico', src: Mexico, text: 'Mexico' },
    { name: 'Morocco', src: Morocco, text: 'Morocco' },
    { name: 'Qatar', src: Qatar, text: 'Qatar' },
    { name: 'Singapore', src: Singapore, text: 'Singapore' },
    { name: 'Spain', src: Spain, text: 'Spain' },
    { name: 'Thailand', src: Thailand, text: 'Thailand' },
    { name: 'Turkey', src: Turkey, text: 'Turkey' },
    { name: 'UAE', src: UAE, text: 'UAE' },
    { name: 'USA', src: USA, text: 'USA' },
    { name: 'Vietnam', src: Vietnam, text: 'Vietnam' }
  ];
    function SearchTour() {
    return (
      <div>
        <Filter countriesList={countriesList} />
      </div>
    );
  }
  export default SearchTour;