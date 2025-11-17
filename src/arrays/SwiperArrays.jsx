import { Designer, Sherlock, MLB, Vonin} from '../imgs/projects/project.jsx';

export const SwiperArray = [
    {
        id: 1,
        name: "Front",
        options: [
            {
                text:"front1"
            },
            {
                text:"front1"
            },
            {
                text:"front1"
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