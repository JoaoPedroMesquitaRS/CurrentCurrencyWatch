const date = new Date();
let currentDay = date.getDate()
let currentMonth = date.getMonth()
let currentYear = date. getFullYear()
let currentHour = date.getHours();
let currentMinutes = date.getMinutes()


async function getCurrencyValue(link){
    let arrayData = []
    let i
    const count = currentDay
    let DayLess = currentDay - 5
    let res

    for (i = DayLess; i < count; i++){
        if(currentDay > 9){
            console.log(i)
            res = await fetch(`https://economia.awesomeapi.com.br/${link}/1?start_date=202307${i}&end_date=202307${i}`);
        }else{
            console.log(i)
            currentDay = `0${currentDay}`
        }
        console.log(res)
        let datah = await res.json();
        datah = JSON.stringify(datah)
        try{
            let stringV = datah.split(",")
            stringV = stringV[7]
            stringV = stringV.split('"')
            let curAsk = stringV[3]
            arrayData.push(curAsk)
        }catch(err){
            const curAsk = ""
            arrayData.push(curAsk)
        }
    }
    return arrayData
}

async function getUSD(){
    let USDarrayData = []
    let i
    const count = currentDay
    let DayLess = currentDay - 5
    let res

    for (i = DayLess; i < count; i++){
        if(currentDay > 9){
            console.log(i)
            res = await fetch(`https://economia.awesomeapi.com.br/USD/1?start_date=202307${i}&end_date=202307${i}`);
        }else{
            console.log(i)
            currentDay = `0${currentDay}`
        }
        let datah = await res.json();
        datah = JSON.stringify(datah)
        try{
            let stringV = datah.split(",")
            stringV = stringV[7]
            stringV = stringV.split('"')
            let curAsk = stringV[3]
            USDarrayData.push(curAsk)
        }catch(err){
            const curAsk = ""
            USDarrayData.push(curAsk)
        }
    }
    
    return USDarrayData
}

export {getUSD}

export {getCurrencyValue}
// export let planetChartData = {
//     type: "line",
//     data: {
//       labels: ["01", "02", "03", "04", "05"],
//       datasets: [
//         {
//           label: "Valor da moeda em relação ao real",
//           data: arrayData,
//           backgroundColor: "rgba(71, 183,132,.5)",
//           borderColor: "#47b784",
//           borderWidth: 3
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       lineTension: 1,
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: false,
//               padding: 25
//             }
//           }
//         ]
//       }
//     }
//   };


// console.log(arrayData)

// export default planetChartData;