import Footer from "./Footer";
import Argentina from "./argentina.jpg";
import Australia from "./australia.jpg";
import Bahamas from "./bahamas.jpg";
import Brazil from "./brazil.jpg";
import Canada from "./canada.jpg";
import China from "./china.jpg";
import Colombia from "./colombia.jpg";
import CostaRica from "./costa rica.jpg";
import Dominican from "./dominican.jpg";
import Egypt from "./egypt.jpg";
import France from "./france.jpg";
import Greece from "./greece.jpg";
import HongKong from "./hong kong.jpg";
import India from "./india.jpg";
import Indonesia from "./indonesia.jpg";
import Israel from "./israel.jpg";
import Italy from "./italy.jpg";
import Japan from "./japan.jpg";
import Korea from "./korea.jpg";
import Malaysia from "./malaysia.jpg";
import Mexico from "./mexico.jpg";
import Morocco from "./morocco.jpg";
import Qatar from "./qatar.jpg";
import Singapore from "./singapore.jpg";
import Spain from "./spain.jpg";
import Thailand from "./thailand.jpg";
import Turkey from "./turkey.jpg";
import UAE from "./uae.jpg";
import USA from "./USA.jpg";
import Vietnam from "./vietnam.jpg";
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
        <Footer />
      </div>
    );
  }
  export default SearchTour;