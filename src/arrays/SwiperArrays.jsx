import { 
    Designer, 
    Sherlock, 
    MLB, 
    Vonin, 
    Paytime,
    Wooden,
    Exchange,
    FrontPortFolio 
} from '../imgs/projects/common/project.jsx';

export const SwiperArray = [
    {
        id: 1,
        name: "Front",
        options: [
            {
                source: Paytime,
                text:"Paytime"
            },
            {
                source: Wooden,
                text:"Wooden"
            },
            {
                source: Exchange,
                text:"Exchange Forecast"
            },
            {
                source: FrontPortFolio,
                text:"Portfolio"
            },
        ]
    },
    {
        id: 2,
        name: "Design",
        options: [
          { source: Designer, text: "PortFolio" },
          { source: Sherlock, text: "Sherlock" },
          { source: MLB, text: "MLB" },
          { source: Vonin, text: "Vonin" }
        ]
    }
];

// buttoncomponent관련 기능 간단한 배열 추가
export const Button = [
    {id:1,text:"Front"},
    {id:2,text:"Design"}
]