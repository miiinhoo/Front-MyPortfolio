import { Designer, Sherlock, MLB, Vonin, Paytime} from '../imgs/projects/common/project.jsx';

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
                source: Paytime,
                text:"front2"
            },
            {
                source: Paytime,
                text:"front3"
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