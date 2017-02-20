
function start() {
    var playerOneName = document.getElementById("player01-name").innerHTML;
    var playerTwoName = document.getElementById("player02-name").innerHTML;
    var playerThreeName = document.getElementById("player03-name").innerHTML;
    
    document.getElementById("start-btn").className = "disp-none";
    document.getElementById("round").className = "title-5";
    document.getElementById("current-name").className = "title-5 fadeIn";
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById('player1-score').style.width = '50%';
    document.getElementById('player2-score').style.width = '50%';
    document.getElementById('player3-score').style.width = '50%';
    document.getElementById('player1-number-score').innerHTML="20";
    document.getElementById('player2-number-score').innerHTML="20";
    document.getElementById('player3-number-score').innerHTML="20";
    document.getElementById('player1-name').innerHTML=playerOneName;
    document.getElementById('player2-name').innerHTML=playerTwoName;
    document.getElementById('player3-name').innerHTML=playerThreeName;
    
    playerOneTurn();
}

var playerOneScore = 20;
var playerTwoScore = 20;
var playerThreeScore = 20;
var currentPlayer = 1;
var cellId;
    
    var playerOneName = document.getElementById("player01-name").innerHTML;
    var playerTwoName = document.getElementById("player02-name").innerHTML;
    var playerThreeName = document.getElementById("player03-name").innerHTML;
    

var questionNumber
var questions = [
"Как распорядилась с найденными средствами Муха - Цокотуха из одноимённого стихотворения Корнея Чуковского?",
"Какими активами обладали старик и старуха в начале произведения А.С. Пушкина «Сказка о рыбаке и рыбке»?",
"Сколько раз старик из произведения А.С. Пушкина «Сказка о рыбаке и рыбке» просил у рыбки изменитиь своё финансовое положение?",
"За что Карл Иваныч, герой повести Льва Николаевича Толстого «Детство», требовал выплаты на сумму 159 рублей 79 копек?",
"Сколько стихов из Библии нужно было рассказать наизусть в воскресной школе из произведения Марка Твена «Приключения Тома Сойера», чтобы получить один синий билетик?",
"Как можно было получить Библию в произведении Марка Твена «Приключения Тома Сойера»?",
"Солько синих билетиков нужно было собрать ученику воскресной школы из произведения Марка Твена «Приключения Тома Сойера», чтобы получить Библию?",
"Чем заменил барщину Евгений Онегин в одноимённом романе А.С. Пушкина?",
"Сколько заплатил хозяину лавки Чартков из повести Н.В. Гоголя «Портрет» за старый портрет?",
"Какое вознагражденье получал Балда за год службы у Попа в «Сказка о Попе и о работнике его Балде» А.С. Пушкина?",
"С кого велел собрать оброк Балде Поп в «Сказке о Попе и о работнике его Балде» А.С. Пушкина?",
"Как отблагодарил белку князь Гвидон за приносимую прибыль в «Сказке о царе Салтане» А.С. Пушкина ",
"Почему медведь в русской народной сказке «Вершки и корешки» всегда оставался не с чем?",
"Чем зарабатывала на жизнь семья Ивана из сказки П. Ершова «Конёк-Горбунок»?",
"Сколько коней разрешает продать Ивану кобылица из сказки П. Ершова «Конёк-Горбунок»?",
"Что продал Буратино в сказку А. Н. Толстого «Золотой ключик, или Приключения Буратино», чтобы попасть в кукольный театр?",
"Сколько золота пообещала королева из пьесы С. Маршака «Двенадцать месяцев»?",
"Что попросила падчерица у королевы взамен на все ее дары в пьесе С. Маршака «Двенадцать месяцев»?"
]; // Вопросы
    
var number1 = [
"Приобрела чайник",
"Землянка у самого моря и разбитое корыто",
"3  раза",
"За причинённые неудобства",
"2 стиха",
"Помогать безвозмездно старикам",
"10 билетиков",
"Подоходным налогом",
"1 рубль",
"Три Щелка по лубу Попа в год",
"Со всех плотников Попа",
"Подарил золотые туфельки",
"Мужик все забирал себе",
"Выращиванием пшеницы",
"7 коней",
"Бумажну куртку",
"Сколько поместится в корзине",
"Новую избу"
]; // ответы
var number2 = [
"Приобрела самовар",
"Рыбацкая лодка",
"4 раза",
"За платёж по хозяйской закладной",
"4 стиха",
"Собрать 10 желтых билетиков за выученные стихи из Библии",
"100 билетиков",
"Уравнительным сбором",
"20 копеек",
"Три Щелка по лубу Попа в месяц",
"Со всех конюхов Попа",
"Выстроил деревянную избу",
"Медведь всегда выбирал бесполезную часть урожая",
"Разведением лошадей",
"5 коней",
"Колпачок",
"Сколько поместится в руках",
"Свое колечко"
];
var number3 = [
"Пожертвовала в благотворительный фонд",
"Особняк у моря",
"5 раз",
"За оплату дороги домой",
"3 стиха",
"Покрасить изгородь церкви",
"1000 билетиков",
"Налогом на сверхприбыль",
"5 рублей",
"5 пудов полбы в год",
"Со всех поваров Попа",
"Выстроил хрустальный дом",
"Медведь работал за инициативу",
"Обманом проезжих",
"3 коней",
"Азбуку",
"По золотой монете за каждый цветок",
"Место во дворце"
];
var number4 = [
"Починила самовар",
"Аквариум с золотой рыбкой",
"6 раз",
"За деньги, издержанные им на подарки",
"6 стихов",
"Прилежно учиться",
"10000 билетиков",
"Оброком",
"5 копеек",
"5 пудов полбы в месяц",
"С чертей",
"Подарил ей остров",
"Медведь раздавал свою часть нуждающимся",
"Охотой",
"2 коней",
"Золотой ключик",
"12 золотых монет",
"корзину золота"
];
    
var answer = [
2, 1, 3, 4, 1, 2, 3, 4, 2, 1, 4, 3, 2, 1, 4, 3, 1, 2
]; // прав ответы

var questionsForTwo = [
"Сколько процентов вознаграждения по договору с Воробьяниновым получал Остап Бендер за свою помощь в романе И. Ильфа и Е. Петрова «Двенадцать стульев»?",
"Кто из помещиков в романе Н.В. Гоголя «Мёртвые души» назначил самую большую стоимость за «несуществующих» людей?",
"Владения какого помещика из романа Н.В. Гоголя «Мёртвые души» можно описать следующим образом: убыточное имение, разоряющее само себя из-за отсутствия финансовых вложений.",
"Владения какого помещика из романа Н.В. Гоголя «Мёртвые души» можно описать следующим образом: имение под постоянным контролем. Учтена каждая единица произведенного продукта.",
"Владения какого помещика из романа Н.В. Гоголя «Мёртвые души» можно описать следующим образом: имение в полном упадке из-за отсутствия контроля за людьми и неумения управлять ими.",
"Владения какого помещика из романа Н.В. Гоголя «Мёртвые души» можно описать следующим образом: имение добротное , всё в нем слаженно. Основательное развивающееся хозяйство.",
"Наймом какого учителя госпожа Простакова из пьесы Д.И. Фонвизина «Недоросль» гордится больше всего и платит ему «по триста рубликов на год»?",
"Что оставил в залог старухе-процентщице старухе-процентщице Родион Раскольников в романе Ф.М. Достоевского «Преступление и наказание»?",
"Кому в романе-эпопее Л.В. Толостого «Война и мир» проиграл сорок три тысячи рублей Николай Ростов? ",
"Герой какого произведения А.С Пушкина теряет всё движимое имущество, принадлежащее его семье?",
"На какие категории товаров в превую очередь пришлось урезать бютжет Акакию Акакиевичу в повести Н.В. Гоголя «Шинель», чтобы собрать деньги на пошив новой верхней одежды?",
"Барон в пьесе А.С. Пушкина «Скупой рыцарь» служит своим деньгам «как алжирский раб». Кого видит в этих деньгах Барон?"
]; // Вопросы
    
var number1ForTwo = [
"60%",
"Собакевич",
"Плюшкин",
"Плюшкин",
"Плюшкин",
"Плюшкин",
"Жалеет обо всех трёх",
"Украшения матери",
"Долохову",
"«Сказка о рыбаке и рыбке»",
"Подарки коллегам",
"Богов"
]; // ответы
var number2ForTwo = [
"40%",
"Манилов",
"Коробочка",
"Коробочка",
"Коробочка",
"Коробочка",
"Вральмана",
"Портсигар",
"Пьеру",
"«Моцарт и Сальери»",
"Чай и свечи",
"Господ"
];
var number3ForTwo = [
"30%",
"Коробочка",
"Собакевич",
"Собакевич",
"Собакевич",
"Собакевич",
"Кутейкина",
"Серебряную посуду",
"Курагину",
"«Дубровский»",
"Канцелярские принадлежности",
"Слуг"
]
;
var number4ForTwo = [
"10%",
"Плюшкин",
"Манилов",
"Манилов",
"Манилов",
"Манилов",
"Цыфиркина",
"Часы и колечко",
"Балконскому",
"«Евгений Онегин»",
"Кондитерские изделия",
"Помошников"
];
    
var answerForTwo = [
2, 1, 1, 2, 4, 3, 2, 4, 1, 3, 2, 2
]; // прав ответы

var questionsForThree = [
"В романе Ф.М. Достоевского «Преступление и наказание» после смерти Мармеладова Родион Раскольников, уходя, предложил финансовую помощь семье умершего. Какую сумму передал Катерине Ивановне Раскольников?",
"Как распорядился с награбленным имуществом Родион Раскольников из романа Фёдора Михайловича Достоевского «Преступление и наказание»?",
"Влюблённый Дмитрий Лопухов из романа Н.Г. Чернышевского «Что делать?» бросает учебу для того, чтобы больше времени уделять работе. Какой предпринимательской деятельностью кроме частных уроков занималсся в это время герой?",
"В пьесе Д.И. Фонвизина «Недоросль» госпожа Простакова останавливает урок арифметики одной своей фразой. Что она говорит?",
"Кто финансово помогал в ведении фермерского бизнеса Николаю Петровичу в произведении «Отцы и дети»?",
"Как Остап Бендер из романа И. Ильфа и Е. Петрова «Двенадцать стульев» заработал на васюкинцах деньги?"
]; // Вопросы
    
var number1ForThree = [
"20 рублей",
"Отправил родным",
"Продажей картин",
"«Что не скажешь, всё вздор. Не нужна нам такая наука!»",
"Василий Иванович Базаров",
"Пообещал устроить в Васюках международный шахматный турнир"
]; // ответы
var number2ForThree = [
"5 рублей",
"Утопил в Неве",
"Переводом учебника географии",
"«Мы свои деньги считать не дадим!»",
"Фенечка",
"Обыграл в наперстки"
];
var number3ForThree = [
"10 рублей",
"Закопал под камень",
"Продажей книг",
"«Когда деньги есть, зачем их считать? Трать себе на здоровье.»",
"Павел Петрович Кирсанов",
"Пообещал построить шахматную школу"
];
var number4ForThree = [
"50 рублей",
"Открыл книжное издательство",
"Сдачей квартиры",
"«Денег нет - что считать? Деньги есть - сочтем и без Пафнутьича хорошохонько.»",
"Анна Сергеевна Одинцова",
"Выкрал редкую шахматную доску"
];
    
var answerForThree = [
1, 3, 2, 4, 3, 1
]; // прав ответы

var cell22rest = 6; var cell32rest = 6; var cell42rest = 6; var cell23rest = 4; var cell33rest = 4; var cell43rest = 4; var cell24rest = 2; var cell34rest = 2; var cell44rest = 2;

var round = 0;

function findQ(array, value) {
    if (array.indexOf) { // если метод существует
    return array.indexOf(value);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}

function check(num) {
        if(num == answer[questionNumber]) {
            if(currentPlayer == 1){
            playerOneScore += 1;
        } else if(currentPlayer == 2){
            playerTwoScore += 1;
        } else if(currentPlayer == 3){
            playerThreeScore += 1;
        }; if(cellId == 'cell-2-2'){
                playerOneScore -= 1;
            } else if(cellId == 'cell-3-2'){
                playerTwoScore -= 1;
            } else if(cellId == 'cell-4-2'){
                playerThreeScore -= 1;
            } ;
        var playerOneScorePercent = 2.5 * playerOneScore;
        var playerTwoScorePercent = 2.5 * playerTwoScore;
        var playerThreeScorePercent = 2.5 * playerThreeScore;    
        document.querySelector('#player1-score').style.width = playerOneScorePercent + '%';
        document.querySelector('#player2-score').style.width = playerTwoScorePercent + '%';
        document.querySelector('#player3-score').style.width = playerThreeScorePercent + '%';
        document.getElementById('player1-number-score').innerHTML=playerOneScore;
        document.getElementById('player2-number-score').innerHTML=playerTwoScore; 
        document.getElementById('player3-number-score').innerHTML=playerThreeScore;
        rightAnswer();    
    } else {wrongAnswer();} ;
    
    if(cellId == 'cell-2-2') {
        cell22rest--;
        document.getElementById('cell-2-2-rest').innerHTML=cell22rest;
    }
    if(cellId == 'cell-3-2') {
        cell32rest--;
        document.getElementById('cell-3-2-rest').innerHTML=cell32rest;
    }
    if(cellId == 'cell-4-2') {
        cell42rest--;
        document.getElementById('cell-4-2-rest').innerHTML=cell42rest;
    }
    
    if(currentPlayer == 1){
        setTimeout(playerTwoTurn, 2000);
        
    } else if(currentPlayer == 2){
        setTimeout(playerThreeTurn, 2000);
        
    } else if(currentPlayer == 3){
        setTimeout(playerOneTurn, 2000);
        
        
        currentPlayer = 0;
    } else {alert(currentPlayer);}
    currentPlayer++;
    questions.splice(questionNumber, 1);
    number1.splice(questionNumber, 1);
    number2.splice(questionNumber, 1);
    number3.splice(questionNumber, 1);
    number4.splice(questionNumber, 1);
    answer.splice(questionNumber, 1);
    restCheck();
}


function checkForTwo(numForTwo){
     if(numForTwo == answerForTwo[questionNumber]) {
            if(currentPlayer == 1){
            playerOneScore += 2;
        } else if(currentPlayer == 2){
            playerTwoScore += 2;
        } else if(currentPlayer == 3){
            playerThreeScore += 2;
        }; if(cellId == 'cell-2-3'){
                playerOneScore -= 2;
            } else if(cellId == 'cell-3-3'){
                playerTwoScore -= 2;
            } else if(cellId == 'cell-4-3'){
                playerThreeScore -= 2;
            } ;
        var playerOneScorePercent = 2.5 * playerOneScore;
        var playerTwoScorePercent = 2.5 * playerTwoScore;
        var playerThreeScorePercent = 2.5 * playerThreeScore;    
        document.querySelector('#player1-score').style.width = playerOneScorePercent + '%';
        document.querySelector('#player2-score').style.width = playerTwoScorePercent + '%';
        document.querySelector('#player3-score').style.width = playerThreeScorePercent + '%';
        document.getElementById('player1-number-score').innerHTML=playerOneScore;
        document.getElementById('player2-number-score').innerHTML=playerTwoScore; 
        document.getElementById('player3-number-score').innerHTML=playerThreeScore;
        rightAnswer(); 
    } else {wrongAnswer();} ;
     
    if(cellId == 'cell-2-3') {
        cell23rest--;
        document.getElementById('cell-2-3-rest').innerHTML=cell23rest;
    }
    if(cellId == 'cell-3-3') {
        cell33rest--;
        document.getElementById('cell-3-3-rest').innerHTML=cell33rest;
    }
    if(cellId == 'cell-4-3') {
        cell43rest--;
        document.getElementById('cell-4-3-rest').innerHTML=cell43rest;
    }
    
    if(currentPlayer == 1){
        setTimeout(playerTwoTurn, 2000);
        
    } else if(currentPlayer == 2){
        setTimeout(playerThreeTurn, 2000);
        
    } else if(currentPlayer == 3){
        setTimeout(playerOneTurn, 2000);
        currentPlayer = 0;
    } else {alert(currentPlayer);}
    currentPlayer++;
    questionsForTwo.splice(questionNumber, 1);
    number1ForTwo.splice(questionNumber, 1);
    number2ForTwo.splice(questionNumber, 1);
    number3ForTwo.splice(questionNumber, 1);
    number4ForTwo.splice(questionNumber, 1);
    answerForTwo.splice(questionNumber, 1);
    restCheck();
}


function checkForThree(numForThree) {
        if(numForThree == answerForThree[questionNumber]) {
            if(currentPlayer == 1){
            playerOneScore += 3;
        } else if(currentPlayer == 2){
            playerTwoScore += 3;
        } else if(currentPlayer == 3){
            playerThreeScore += 3;
        }; if(cellId == 'cell-2-4'){
                playerOneScore -= 3;
            } else if(cellId == 'cell-3-4'){
                playerTwoScore -= 3;
            } else if(cellId == 'cell-4-4'){
                playerThreeScore -= 3;
            } ;
        var playerOneScorePercent = 2.5 * playerOneScore;
        var playerTwoScorePercent = 2.5 * playerTwoScore;
        var playerThreeScorePercent = 2.5 * playerThreeScore;    
        document.querySelector('#player1-score').style.width = playerOneScorePercent + '%';
        document.querySelector('#player2-score').style.width = playerTwoScorePercent + '%';
        document.querySelector('#player3-score').style.width = playerThreeScorePercent + '%';
        document.getElementById('player1-number-score').innerHTML=playerOneScore;
        document.getElementById('player2-number-score').innerHTML=playerTwoScore; 
        document.getElementById('player3-number-score').innerHTML=playerThreeScore;
        rightAnswer();    
    } else {wrongAnswer();} ;
    
    if(cellId == 'cell-2-4') {
        cell24rest--;
        document.getElementById('cell-2-4-rest').innerHTML=cell24rest;
    }
    if(cellId == 'cell-3-4') {
        cell34rest--;
        document.getElementById('cell-3-4-rest').innerHTML=cell34rest;
    }
    if(cellId == 'cell-4-4') {
        cell44rest--;
        document.getElementById('cell-4-4-rest').innerHTML=cell44rest;
    }
    
    if(currentPlayer == 1){
        setTimeout(playerTwoTurn, 2000);
        
    } else if(currentPlayer == 2){
        setTimeout(playerThreeTurn, 2000);
        
    } else if(currentPlayer == 3){
        setTimeout(playerOneTurn, 2000);
        
        
        currentPlayer = 0;
    } else {alert(currentPlayer);}
    currentPlayer++;
    questionsForThree.splice(questionNumber, 1);
    number1ForThree.splice(questionNumber, 1);
    number2ForThree.splice(questionNumber, 1);
    number3ForThree.splice(questionNumber, 1);
    number4ForThree.splice(questionNumber, 1);
    answerForThree.splice(questionNumber, 1);
    restCheck();
}



function playerOneTurn() {
    document.getElementById("cell-4-2").className = "active-cell";
    document.getElementById("cell-4-3").className = "active-cell";
    document.getElementById("cell-4-4").className = "active-cell";
    document.getElementById("cell-3-2").className = "active-cell";
    document.getElementById("cell-3-3").className = "active-cell";
    document.getElementById("cell-3-4").className = "active-cell";
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById("cell-2-3").className = "inactive-cell";
    document.getElementById("cell-2-4").className = "inactive-cell";
    document.getElementById('player-name').innerHTML= document.getElementById("player01-name").innerHTML;
    round++;
    document.getElementById('round-number').innerHTML=round;
    end();
    if(cell33rest == 0) document.getElementById("cell-3-3").className = "inactive-cell";
    if(cell43rest == 0) document.getElementById("cell-4-3").className = "inactive-cell";
    restCheck();
}

function playerTwoTurn() {
    document.getElementById("cell-2-2").className = "active-cell";
    document.getElementById("cell-2-3").className = "active-cell";
    document.getElementById("cell-2-4").className = "active-cell";
    document.getElementById("cell-4-2").className = "active-cell";
    document.getElementById("cell-4-3").className = "active-cell";
    document.getElementById("cell-4-4").className = "active-cell";
    document.getElementById("cell-3-2").className = "inactive-cell";
    document.getElementById("cell-3-3").className = "inactive-cell";
    document.getElementById("cell-3-4").className = "inactive-cell";
    document.getElementById('player-name').innerHTML= document.getElementById("player02-name").innerHTML;
    if(cell24rest == 0) document.getElementById("cell-2-4").className = "inactive-cell";
    if(cell44rest == 0) document.getElementById("cell-4-4").className = "inactive-cell";
    restCheck();
} 

function playerThreeTurn() {
    document.getElementById("cell-3-2").className = "active-cell";
    document.getElementById("cell-3-3").className = "active-cell";
    document.getElementById("cell-3-4").className = "active-cell";
    document.getElementById("cell-2-2").className = "active-cell";
    document.getElementById("cell-2-3").className = "active-cell";
    document.getElementById("cell-2-4").className = "active-cell";
    document.getElementById("cell-4-2").className = "inactive-cell";
    document.getElementById("cell-4-3").className = "inactive-cell";
    document.getElementById("cell-4-4").className = "inactive-cell";
    document.getElementById('player-name').innerHTML= document.getElementById("player03-name").innerHTML;
    if(cell34rest == 0) document.getElementById("cell-3-4").className = "inactive-cell";
    if(cell24rest == 0) document.getElementById("cell-4-4").className = "inactive-cell";
    restCheck();
}

function cellForOne(cell) {
    cellId = cell;
    rand = Math.floor(Math.random() * questions.length);
    questionNumber = findQ(questions, questions[rand]); // находим номер вопроса в масиве
    document.getElementById("questions1").className = "questions1";
    document.getElementById("question").className = "question";
    document.getElementById('question').innerHTML=questions[questionNumber];
    
    document.getElementById('option5').innerHTML="";
    document.getElementById('option6').innerHTML="";
    document.getElementById('option7').innerHTML="";
    document.getElementById('option8').innerHTML="";
    document.getElementById('option9').innerHTML="";
    document.getElementById('option10').innerHTML="";
    document.getElementById('option11').innerHTML="";
    document.getElementById('option12').innerHTML="";
    document.getElementById('option1').innerHTML=number1[questionNumber];
    document.getElementById('option2').innerHTML=number2[questionNumber];
    document.getElementById('option3').innerHTML=number3[questionNumber];
    document.getElementById('option4').innerHTML=number4[questionNumber];
    
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById("cell-2-3").className = "inactive-cell";
    document.getElementById("cell-2-4").className = "inactive-cell";
    
    document.getElementById("cell-3-2").className = "inactive-cell";
    document.getElementById("cell-3-3").className = "inactive-cell";
    document.getElementById("cell-3-4").className = "inactive-cell";
    
    document.getElementById("cell-4-2").className = "inactive-cell";
    document.getElementById("cell-4-3").className = "inactive-cell";
    document.getElementById("cell-4-4").className = "inactive-cell";
    restCheck();
}

function cellForTwo(cell) {
    cellId = cell;
    rand = Math.floor(Math.random() * questionsForTwo.length);
    questionNumber = findQ(questionsForTwo, questionsForTwo[rand]); // находим номер вопроса в масиве
    document.getElementById("questions2").className = "questions2";
    document.getElementById("question").className = "question";
    document.getElementById('question').innerHTML=questionsForTwo[questionNumber];
    
    document.getElementById('option1').innerHTML="";
    document.getElementById('option2').innerHTML="";
    document.getElementById('option3').innerHTML="";
    document.getElementById('option4').innerHTML="";
    document.getElementById('option9').innerHTML="";
    document.getElementById('option10').innerHTML="";
    document.getElementById('option11').innerHTML="";
    document.getElementById('option12').innerHTML="";
    document.getElementById('option5').innerHTML=number1ForTwo[questionNumber];
    document.getElementById('option6').innerHTML=number2ForTwo[questionNumber];
    document.getElementById('option7').innerHTML=number3ForTwo[questionNumber];
    document.getElementById('option8').innerHTML=number4ForTwo[questionNumber];
    
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById("cell-2-3").className = "inactive-cell";
    document.getElementById("cell-2-4").className = "inactive-cell";
    
    document.getElementById("cell-3-2").className = "inactive-cell";
    document.getElementById("cell-3-3").className = "inactive-cell";
    document.getElementById("cell-3-4").className = "inactive-cell";
    
    document.getElementById("cell-4-2").className = "inactive-cell";
    document.getElementById("cell-4-3").className = "inactive-cell";
    document.getElementById("cell-4-4").className = "inactive-cell";
    restCheck();
}

function cellForThree(cell) {
    cellId = cell;
    rand = Math.floor(Math.random() * questionsForThree.length);
    questionNumber = findQ(questionsForThree, questionsForThree[rand]); // находим номер вопроса в масиве
    document.getElementById("questions3").className = "questions3";
    document.getElementById("question").className = "question";
    document.getElementById('question').innerHTML=questionsForThree[questionNumber];
    
    document.getElementById('option5').innerHTML="";
    document.getElementById('option6').innerHTML="";
    document.getElementById('option7').innerHTML="";
    document.getElementById('option8').innerHTML="";
    document.getElementById('option1').innerHTML="";
    document.getElementById('option2').innerHTML="";
    document.getElementById('option3').innerHTML="";
    document.getElementById('option4').innerHTML="";
    document.getElementById('option9').innerHTML=number1ForThree[questionNumber];
    document.getElementById('option10').innerHTML=number2ForThree[questionNumber];
    document.getElementById('option11').innerHTML=number3ForThree[questionNumber];
    document.getElementById('option12').innerHTML=number4ForThree[questionNumber];
    
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById("cell-2-3").className = "inactive-cell";
    document.getElementById("cell-2-4").className = "inactive-cell";
    
    document.getElementById("cell-3-2").className = "inactive-cell";
    document.getElementById("cell-3-3").className = "inactive-cell";
    document.getElementById("cell-3-4").className = "inactive-cell";
    
    document.getElementById("cell-4-2").className = "inactive-cell";
    document.getElementById("cell-4-3").className = "inactive-cell";
    document.getElementById("cell-4-4").className = "inactive-cell";
    restCheck();
}

function rightAnswer() {
    document.getElementById("right-answer").className = "right-answer";
    document.getElementById("questions1").className = "disp-none";
    document.getElementById("questions2").className = "disp-none";
    document.getElementById("questions3").className = "disp-none";
    document.getElementById("question").className = "disp-none";
    setTimeout(rightAnswerDel, 2000)
}

function rightAnswerDel() {
    document.getElementById("right-answer").className = "disp-none";
}

function wrongAnswer() {
    document.getElementById("wrong-answer").className = "wrong-answer";
    document.getElementById("questions1").className = "disp-none";
    document.getElementById("questions2").className = "disp-none";
    document.getElementById("questions3").className = "disp-none";
    document.getElementById("question").className = "disp-none";
    setTimeout(wrongAnswerDel, 2000)
}

function wrongAnswerDel() {
    document.getElementById("wrong-answer").className = "disp-none";
}

function restCheck() {
    if(cell22rest == 0) document.getElementById("cell-2-2").className = "inactive-cell";
    if(cell32rest == 0) document.getElementById("cell-3-2").className = "inactive-cell";
    if(cell42rest == 0) document.getElementById("cell-4-2").className = "inactive-cell";
    if(cell23rest == 0) document.getElementById("cell-2-3").className = "inactive-cell";
    if(cell33rest == 0) document.getElementById("cell-3-3").className = "inactive-cell";
    if(cell43rest == 0) document.getElementById("cell-4-3").className = "inactive-cell"; 
    if(cell24rest == 0) document.getElementById("cell-2-4").className = "inactive-cell";
    if(cell34rest == 0) document.getElementById("cell-3-4").className = "inactive-cell";
    if(cell44rest == 0) document.getElementById("cell-4-4").className = "inactive-cell";
}


function end() {
    if(round == 8){
        if(playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
            document.getElementById('player-name').innerHTML= document.getElementById("player01-name").innerHTML;
            document.getElementById('turn').innerHTML= ' победил';
        } else if(playerTwoScore > playerThreeScore && playerTwoScore > playerThreeScore) {
            document.getElementById('player-name').innerHTML= document.getElementById("player01-name").innerHTML;
            document.getElementById('turn').innerHTML= ' победил';
        } else if(playerThreeScore > playerTwoScore && playerThreeScore > playerThreeScore) {
            document.getElementById('player-name').innerHTML= document.getElementById("player01-name").innerHTML;
            document.getElementById('turn').innerHTML= ' победил';
        } else {
            document.getElementById('player-name').innerHTML= '';
            document.getElementById('turn').innerHTML= 'Ничья!';
        } ;
        document.getElementById('round').innerHTML= 'Конец';
    document.getElementById("cell-2-2").className = "inactive-cell";
    document.getElementById("cell-2-3").className = "inactive-cell";
    document.getElementById("cell-2-4").className = "inactive-cell";
    
    document.getElementById("cell-3-2").className = "inactive-cell";
    document.getElementById("cell-3-3").className = "inactive-cell";
    document.getElementById("cell-3-4").className = "inactive-cell";
    
    document.getElementById("cell-4-2").className = "inactive-cell";
    document.getElementById("cell-4-3").className = "inactive-cell";
    document.getElementById("cell-4-4").className = "inactive-cell";
    }
}

if(location.reload){
    window.location = '#page-top';
}

function overflow() {
    document.getElementById('body').style.overflowY = 'visible';
}