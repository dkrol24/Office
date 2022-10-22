import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <BsFillCheckCircleFill style={{ fill: gradient }} />,
    title:
      "Gwarantujemy oszczędność Państwa cennego czasu i pewność terminowej realizacji zleceń.",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 2,
    icon: <BsFillCheckCircleFill style={{ fill: gradient }} />,
    title:
      "Do każdego klienta podchodzimy indywidualnie tak aby współpraca dawała jak najlepsze efekty.",
  },
  {
    id: 3,
    icon: <BsFillCheckCircleFill style={{ fill: gradient }} />,
    title:
      "Udzielamy kompleksowego wsparcia w zakresie prowadzenia ksiąg, rejestrów i rozliczeń podatkowych.",
  },
  {
    id: 4,
    icon: <BsFillCheckCircleFill style={{ fill: gradient }} />,
    title:
      "Jesteśmy gwarantem sukcesu i pełnej rentowności Państwa przedsiębiorstwa.",
  },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const features = [
  {
    id: 10,
    title: "Obsługa wspólnot mieszkaniowych",
    text: "- Prowadzimy księgowość zgodnie z wytycznymi z Ustawy o Rachunkowości. ",
    text2: "- Przygotowujemy i prowadzimy kartoteki właścicieli lokali.",
    text3:
      "- Sporządzamy deklaracje ZUS, deklaracje do Urzędu Skarbowego oraz Sprawozdania Fiannsowe.",
  },
  {
    id: 11,
    title: "Ryczałt ewidencjonowany",
    text: "Pomagamy przy rejestracji działalnosci gospodarczych.",
    text2:
      "- Prowadzimy KPiR zgodnie z Ustawą o rachunkowości i przepisami prawa podatkowego.",
    text3:
      "- Reprezentujemy Państwa Firmę w Urzędzie Skarbowym, ZUS i innych organach.",
    text4: "- Przygotowujemy sprawozdania do Urzędu Statystycznego.",
    text5: "- Pomagamy w odpowiednim wyborze formy opodatkowania.",
  },
  {
    id: 12,
    title: "Prowadzenia księgi przychodów i rozchodów",
    text: "- Pomagamy przy rejestracji działalnosci gospodarczych.    ",
    text2:
      "- Reprezentujemy Państwa Firmę w Urzędzie Skarbowym, ZUS i innych organach.",
    text3: "- Przygotowujemy sprawozdania do Urzędu Statystycznego.",
    text4: "- Pomagamy w odpowiednim wyborze formy opodatkowania.",
  },
  {
    id: 13,
    title: "Rozliczeń kadrowo-płacowych",
    text: "- Sporządzamy list płac oraz miesiecznych deklaracji PIT i ZUS.",
    text2:
      "- Przygotowujemy i zajmujemy się wysyłką rocznych informacji o uzyskanych dochodach i pobranych zaliczkach podatku PIT.",
    text3: "- Ewidencjonujemy akta pracownicze.",
  },
  {
    id: 14,
    title: "Prowadzenia ksiąg handlowych",
    text: "- Świadczymy usługi dla Spółek Prawa Handlowego.",
    text2: "- Pomagamy w rejestracji Spółek.",
    text3:
      "- Prowadzimy księgi zgodnie z ustawą o rachunkowości i przepisami prawa podatkowego.",
    text4:
      "Przygotowujemy i wysyłamy deklaracje podatkowe do odpowiednich Urzędów.",
    text5:
      "- Reprezentujemy Państwa Firmę w Urzędzie Skarbowym, ZUS i innych organach.",
    text6: "- Przygotowujemy sprawozdania do Urzędu Statystycznego.",
    text7: "- Przygotowujemy Sprawozdania Finansowe do KRS.",
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "500 022 108",
    text: "Numer kontaktowy",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "abema.kontakt@gmail.com",
    text: "Adres e-mail",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "Ul. Ksawerów 3, 02-656 Warszawa",
    text: "Lokalizacja biura",
  },
];

const sections = {
  services,
  about,
  features,
  contact,
};

export default sections;
