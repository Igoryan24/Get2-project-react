
const flights = [
    {
        id:1,
        head: "AZUR Air Ukraine",
        photo: "images/azurair.jpg",
        description: `Подорожуйте безпечно разом з AZUR Air Ukraine, за доступними цінами!
            Авіакомпанія отримала ну майже новий, досить рідкісний Boeing 757-300 родом з Ізраїлю. На даний момент авіакомпанія налічує:
        Boeing 737-800 і Boeing 767-300er - по 3 літака;`,
        color: "#5f2923",

    },
    {
        id:2,
        head: "WINDROSE airlines",
        photo: "images/windrose.jpeg",
        description: `Швидко та вчасно Windrose доставить вас на відпочинок вашої мрії! Лідер з вчасно виконаних рейсів.
        Замовляйте квитки та отримайте каву і пончик в подарунок!
        В основі авіапарку 3 середньомагістральні літаки Airbus A-321 і 1 Airbus A320`,
        classwindrose: "row-windrose",
        color: "#db4c09",
        
    },
    {
        id:3,
        head: "SkyUp Airlines",
        photo: "images/Skyup2.jpg",
        description: "Єдина авіакомпанія України яка на даний момент виконує прямі рейси до Занзібару, із стрімко зростаючим авіафлотом досить свіжих та комфортних середньомагістральних літаків Boeing 737-700 NG/800 NG/900 ER. Середній вік авіфлоту становить 9 років.",
        color: "#f36a2a",
        
    },
    {
        id:4,
        head: "Ukraine International Airlines",
        photo: "images/mau.jpg",
        description: `МАУ можна назвати справжнім "Oldom" на ринку вітчизняних авіакомпаній, і хоча компанія має досить потужний авіафлот в основі якого Boeing, очолює топ найгірших авіакомпаній світу. Чи варто переплачувати за сумнівний сервіс ? Питання залишається досить відкритим. `, 
        classwindrose: "row-windrose",
        color: "#4c89da",
        
    }
]

export const getFlightsObject = array => array.reduce((obj,flight) => ({
    ...obj,
    [flight.id]:flight
}),{})

export default flights