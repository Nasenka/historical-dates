import HistoricalDates from "./components/HistoricalDates/HistoricalDates";
import { IHistoricalDate } from "./types";

function App() {
  const dates: IHistoricalDate[] = [
    {
      id: 1,
      title: "Технологии",
      start: 1980,
      end: 1986,
      events: [
        {
          id: 1,
          year: 1980,
          description: "Sinclair Research выпускает домашний компьютер ZX80.",
        },
        {
          id: 2,
          year: 1981,
          description: "Выход первого персонального компьютера IBM PC.",
        },
        {
          id: 3,
          year: 1982,
          description: "Появился домашний компьютер ZX.",
        },
        {
          id: 4,
          year: 1983,
          description:
            "Сеть ARPANET перешла на протокол TCP/IP, что стало основой современного Интернета.",
        },
        {
          id: 5,
          year: 1984,
          description:
            "Выпущен первый компьютер Macintosh и операционная система Mac OS.",
        },
        {
          id: 6,
          year: 1985,
          description:
            "Появление операционной системы Windows 1.0 от Microsoft.",
        },
        {
          id: 7,
          year: 1986,
          description: "Зафиксирован первый компьютерный вирус.",
        },
      ],
    },
    {
      id: 2,
      title: "Кино",
      start: 1987,
      end: 1991,
      events: [
        {
          id: 1,
          year: 1987,
          description: "«Хищник»/Predator, США (реж. Джон Макатирнан).",
        },
        {
          id: 2,
          year: 1988,
          description:
            "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис).",
        },
        {
          id: 3,
          year: 1989,
          description:
            "«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис).",
        },
        {
          id: 4,
          year: 1990,
          description:
            "«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин).",
        },
        {
          id: 5,
          year: 1991,
          description:
            "«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд).",
        },
      ],
    },
    {
      id: 3,
      title: "Литература",
      start: 1992,
      end: 1997,
      events: [
        {
          id: 1,
          year: 1992,
          description:
            "Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».",
        },
        {
          id: 2,
          year: 1994,
          description: "«Бессонница» — роман Стивена Кинга.",
        },
        {
          id: 3,
          year: 1995,
          description: "Нобелевская премия по литературе — Шеймас Хини.",
        },
        {
          id: 4,
          year: 1997,
          description: "«Гарри Поттер и философский камень».",
        },
      ],
    },
    {
      id: 4,
      title: "Театр",
      start: 1999,
      end: 2004,
      events: [
        {
          id: 1,
          year: 1999,
          description:
            "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона.",
        },
        {
          id: 2,
          year: 2000,
          description: "Возобновлено издание журнала «Театр».",
        },
        {
          id: 3,
          year: 2002,
          description:
            "Премьера трилогии Тома Стоппарда «Берег Утопии» Королевский Национальный театр, Лондон.",
        },
        {
          id: 4,
          year: 2004,
          description:
            "Всемирный театральный фестиваль «Форум театральной эры» в Санкт-Петербурге",
        },
      ],
    },
    {
      id: 5,
      title: "Спорт",
      start: 2006,
      end: 2014,
      events: [
        {
          id: 1,
          year: 2006,
          description:
            "Баскетбольный клуб ЦСКА стал победителем нафионального первенства России.",
        },
        {
          id: 2,
          year: 2008,
          description:
            "С 8 по 24 августа в Пекине прошли 29-е летние Олимпийские игры.",
        },
        {
          id: 3,
          year: 2010,
          description:
            "13—28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.",
        },
        {
          id: 4,
          year: 2012,
          description: "2 августа — Летние Олимпийские игры.",
        },
        {
          id: 5,
          year: 2014,
          description: "XXII зимние Олимпийские игры (Сочи, Россия).",
        },
      ],
    },
    {
      id: 6,
      title: "Наука",
      start: 2015,
      end: 2022,
      events: [
        {
          id: 1,
          year: 2015,
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды.",
        },
        {
          id: 2,
          year: 2016,
          description:
            "Телескоп «Хаббл» обнаружил самую удаленную из всех обнаруженных галактик, получившую обозначение GN-z11.",
        },
        {
          id: 3,
          year: 2017,
          description:
            "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi.",
        },
        {
          id: 4,
          year: 2018,
          description:
            "Старт коспического аппарата Solar Probe Plus, предназначенного для изуения Солнца.",
        },
        {
          id: 5,
          year: 2019,
          description:
            "Google объявил о создании 53-кубитного квантового компьютера.",
        },
        {
          id: 5,
          year: 2020,
          description:
            "Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета.",
        },
        {
          id: 5,
          year: 2021,
          description: "Запуск телескопа «Джеймс Уэбб».",
        },
        {
          id: 5,
          year: 2022,
          description:
            "NASA успешно провело первый в истории испытание планетарной защиты — миссию DART по изменению траектории астероида.",
        },
      ],
    },
  ];

  return (
    <main>
      <HistoricalDates dates={dates} />
      {/* <HistoricalDates dates={dates} /> */}
    </main>
  );
}

export default App;
