const img = document.getElementById('picture');
const ath = document.getElementById('author');
const tit = document.getElementById('title');
const des = document.getElementById('description');

const title = document.querySelector('title');

/*
	tu działasz
	pamiętaj o przecinkach
	w nazwie zdjęcia nie może być polskich znaków
	mogą być tylko w tekstach w cudzysłowiach
	
	nazwa_zdjecia: {
		author: "autor",
		title: "tytuł",
		description: "opis"
	},
*/
const data = {
   deska: {
      author: "Bartek",
      title: "Jazda na desce",
      description: "Pasjonuje mnie też jazda na desce. W podstawówce mówili na mnie Tony Hawk."
   },
   gitarabb: {
      author: "Bartek",
      title: "Gra na gitarze",
      description: "Moja pasja to gra na gitarze. Uczę się grać od kilku lat."
   },
   ksiazka: {
      author: "Bartek",
      title: "Czytanie",
      description: "Lubię czytać książki. Szczególnie lubię Stephen’a King’a."
   },
   lego: {
      author: "Bartek",
      title: "Układanie klocków",
      description: "Od dziecka lubię układać LEGO. Klocki LEGO pobudzają kreatywność."
   },
   plyty: {
      author: "Bartek",
      title: "Słuchanie muzyki",
      description: "Relaksuję się przy muzyce. Szczególnie przy muzyce rockowej."
  
   },
   teleskop: {
      author: "Bartek",
      title: "Oglądanie gwiazd",
      description: "Kiedyś w prezencie dostałem teleskop. To był mój “mały krok” do zostania astronomem."
   },
   pilka: {
      author: "Bartek",
      title: "Gra w kosza",
      description: "Nie uprawiam dużo sportu, ale jeden który uwielbiam to koszykówka. Zawsze podziwiałem Kobe Bryant’a."
   },
   plakaty: {
      author: "Bartek",
      title: "Oglądanie filmów",
      description: "Uwielbiam oglądać filmy. Najbardziej lubię filmy akcji i komedie."
   },
   chorwacja: {
      author: "Michał",
      title: "Podróżowanie",
      description: "Od wielu lat właściwie co roku spędzam dwa tygodnie w Chorwacji nad morzem To piękny i ciekawy kraj, jeszcze nigdy mi się tam nie nudziło. Podróże fascynowały mnie od dziecka i zawsze czerpałem z nich wielką przyjemność. To zdjęcie wykonano w miejscowości Orebić na półwyspie Pelješac."
   },
   czytanie_ksiazek: {
      author: "Michał",
      title: "Wgłębianie się w literaturę",
      description: "Często wolny czas spędzam czytając książki. Do moich ulubionych należą opowiadania o Wiedźminie Sapkowskiego, a także Buszujący w zbożu J.D. Salinger."
   },
   lego_sw: {
      author: "Michał",
      title: "Budowanie z klocków lego",
      description: "Od niepamiętnych czasów zabawa klockami jest dla mnie niezbędnym elementem udanego dnia. Przez ten czas szczególnie upodobałem sobie zestawy z serii Gwiezdne Wojny i Lego Creator."
   },
   mogielnica: {
      author: "Michał",
      title: "Wycieczka w góry",
      description: "Wycieczki w góry przy pięknej pogodzie zawsze są dla mnie niesamowitym przeżyciem.To zdjęcie przedstawia panoramę Beskidu Wyspowego widzianą z najwyższego szczytu tego pasma górskiego - Mogielnicy - i zostało zrobione podczas naszej rodzinnej wycieczki jesienią zeszłego roku."
   },
   pasja_programowanie: {
      author: "Michał",
      title: "Programowanie",
      description: "Kilka lat temu programowanie stało się moją prawdziwą pasją. Od tamtego czasu przed komputerem spędzam więcej czasu niż powinienem, co czasem martwi moich rodziców."
   },
   rzym_1: {
      author: "Michał",
      title: "Bazylika św.Jana",
      description: "To zdjęcie bazyliki św. Jana na Lateranie w Rzymie zrobione przeze mnie w zeszłym roku."
   },
   rzym_2: {
      author: "Michał",
      title: "Piazza del Popolo",
      description: "To urocze zdjęcie przedstawia Piazza del Popolo w Rzymie; plac, który przez lata był miejscem publicznych egzekucji. Na fotografii widać dwa bliźniacze kościoły dedykowane Matce Bożej znajdujące się przy południowej części placu."
  },
   stok_narciarski: {
      author: "Michał",
      title: "Jazda na nartach",
      description: "Narciarstwo jest dla mnie równie ważne jak układanie budowli z klocków Lego. Na tej fotografii widać stok narciarski w austriackiej miejscowości, którą od lat odwiedzamy."
  },
   moda: {
      author: "Natalia",
      title: "Ubrania i nowe trendy",
      description: "Jednym z moich zainteresowań jest moda. Bardzo lubię śledzić nowe trendy i kupować nowe ubrania."
  },
   projektowanie_wnetrz: {
      author: "Natalia",
      title: "Projekty wnętrz",
      description: "Projektowanie wnętrz również jest czymś, co mnie bardzo interesuje. Uwielbiam rozmyślać ułożenie i dobór mebli w danym miejscu. Co chwilę zmieniam umiejscowienie mebli w swoim pokoju."
  },
   czytanie: {
      author: "Natalia",
      title: "Oderwanie od rezczywistości",
      description: "Książki od zawsze były moim zajęciem, kiedy miałam już dość elektroniki. Wyłączałam głos w telefonie i siadałam z książką, którą potrafiłam przeczytać w parę godzin, nie ważne jak gruba była."
  },
   zdjecia: {
      author: "Natalia",
      title: "Fotografowanie",
      description: "Uwielbiam robić zdjęcia. Ludziom, miejscom, przedmiotom czasami. Często niektóre drukuję i wieszam w pokoju na ścianie."
  },
   podrozowanie: {
      author: "Natalia",
      title: "Zwiedzanie różnych krajów",
      description: "Od małego co roku bywam za granicą. Latam samolotem, pływam statkami, jadę autem. Rodzice zabierali mnie w różne miejsca, ale również z przyjaciółmi wyjeżdżałam. To zdjęcie zostało zrobione przed wjazdem do Disneylandu w Paryżu."
  },
   muzyka: {
      author: "Natalia",
      title: "Śpiew i koncerty",
      description: "Słuchanie muzyki towarzyszy mi przez całe życie. Uwielbiam pełno artystów i zespołów. Bywam również na koncertach."
  },
   makijaz: {
      author: "Natalia",
      title: "Make-up i kosmetyki",
      description: "Od niedawna polubiłam kombinować z makijażem. Mam parę paletek z cieniami, dużo pędzli. Kiedy mi się nudzi, lubię popróbować czegoś innego."
  },
   rysowanie: {
      author: "Natalia",
      title: "Szkicowanie",
      description: "Kiedy byłam mała, bardzo lubiłam wyszukiwać w internecie jakiś zdjęć i później na ich podstawie szkicować. Do dzisiaj, jak mam czas, lubię sobie coś dla samej siebie narysować."
  },
   BallR: {
      author: "Jakub",
      title: "Tworzenie broni i robotów",
      description: "Jednym z moich zainteresowań jest tworzenie różnego rodzaju broni oraz robotów, które można wykorzystać w tworzeniu gier. Tworzenie takich postaci tworzy wyjątkowe oraz nietypowe wyzwania powodując, iż muszę spędzić dużo czasu skupiając uwagę podczas tworzenia na wydajność oraz skomplikowanie obiektów."
  },
   Tube12: {
      author: "Jakub",
      title: "Tworzenie renderów",
      description: "Podczas tworzenia “renderów”, czyli pojedynczych obrazków, staram się by każdy z nich prezentował coś nowego oraz  opowiadał jakąś historię. W tym wypadku moim celem było zaintrygowanie odbiorcy oraz tajemniczość. Samo zdjęcie przekazuje mało informacji, co powoduje, iż odbiorca musi sam wypełnić luki."
  },
   Klocki: {
      author: "Jakub",
      title: "Tworzenie renderów bez historii",
      description: "Czasem tworzę “rendery” bez jakiejkolwiek historii, bądź zagadki. Tak jest w tym przypadku.Jest to obrazek, który istnieje tylko “by ładnie wyglądać”."
  },
   mech: {
      author: "Jakub",
      title: "Fotografia",
      description: "Jednym z moich zainteresowań jest fotografia. Częścią fotografii, która mnie najbardziej interesuje są zdjęcia makro. Pokazują one świat, którego nie widzimy na co dzień. Dzięki tym zdjęciom można zobaczyć jak wiele organizmów żyje na czymś tak małym jak pień drzewa."
  },
   gitara1: {
      author: "Jakub",
      title: "Gra na instrumencie",
      description: "Granie na gitarze jest jedną z moich ulubionych czynności. Potrafię spędzać duże ilości czasu grając. Najbardziej lubię tworzyć własne melodie, lub modyfikować te już istniejące. Daje mi to dużą swobodę oraz pozwala na eksperymentowanie ze sposobami grania."
  },
   bazylika: {
      author: "Jakub",
      title: "Mało odwiedzanie miejsca",
      description: "Chodzenie w miejsca, gdzie mało kto zobaczy dla mnie jest o wiele ciekawsze, niż chodzenie do popularnych celów turystycznych. To zdjęcie zrobiłem w Budapeszcie pod kopułą w bazylice św. Stefana. Było to miejsce otwarte dla turystów, lecz mało kto tam chodził, ponieważ dotarcie tam nie jest przystosowane dla turystów. Moim zdaniem takie miejsca są fascynujące, ponieważ można zobaczyć coś wyjątkowego."
  },
   komputer: {
      author: "Jakub",
      title: "3 monitory",
      description: "Moim zainteresowaniem są również komputery oraz ich budowanie. Mocny i wydajny komputer jest mi potrzebny do tworzenia renderów oraz pracy, więc z wielką przyjemnością ulepszam go raz po razie by stawał się coraz mocniejszy i lepszy."
  },
   cyborg: {
      author: "Jakub",
      title: "Wiedza o ciele",
      description: "Jedną z rzeczy, która nigdy się dla mnie nie zmieni jest wielka chęć zdobywania wiedzy o moim ciele. Ta właśnie ciekawość powoduje, iż na różne sposoby sprawdzam jak działa mój organizm oraz jak go mogę ulepszyć. Na tym zdjęciu widać, jak sprawdzałem, czy mogę mierzyć aktywność moich mięśni w ręce. Również ciekawy dla mnie jest biohacking, czyli zmienianie, lub wszczepianie w siebie urządzeń, lub rzeczy, by siebie ulepszyć. Takim przykładem może być wszczepienie sobie magnesu w palec, by wyczuwać pola magnetyczne oraz przedmioty ferromagnetyczne, lub wszczepianie małego chipu pomiędzy kciukiem a palcem wskazującym, co może zastąpić klucze i spowodować, że nie można ich zgubić, a złodzieje nie mają się jak włamać drzwi, które nie mają fizycznego zamka."
  },

}


window.addEventListener('load', () => {
   const urlParams = new URLSearchParams(window.location.search);
   const image = urlParams.get("image").substring(0, urlParams.get("image").length - 4);

   img.innerHTML = `<img src="./images/${image}.jpg" alt="${image}">`;
   ath.innerHTML = data[image].author;
   tit.innerHTML = data[image].title;
   des.innerHTML = data[image].description;

   title.innerHTML = data[image].title;
});