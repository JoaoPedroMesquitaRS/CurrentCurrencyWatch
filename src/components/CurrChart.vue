<template>
    <div class="bg-white shadow-lg rounded-lg p-5 -mt-16 w-9/12" style="height: 350px;">
        <canvas v-if="validar" id="chart" height="350px" ></canvas>
        <div v-else class="h-full flex justify-center items-center text-3xl text-zinc-500">SELECIONE UMA MOEDA E CLIQUE NO BOTÃO PARA GERAR O GRÁFICO</div>
        <div v-if="validar" class="flex items-center">
            <span class="mr-5">Comparar com outras moedas:</span>
            <input v-on:click="getUSDarray()" type="checkbox" name="" value="0">Dolár Americano
        </div>
    </div>
    <button v-on:click="atualiza()" class="bg-blue-500 px-2 py-3 rounded-md m-5">Gerar Gráfico</button>
</template>

<script>

import Chart from 'chart.js'
import {getCurrencyValue, getUSD} from '../currency-data.js'
import {returnValor} from './ConCur.vue'

let currencyChartData
let isShown = false 
let link
let arrayData = []
let USDArray

const date = new Date();
let currentDay = date.getDate()
let currentMonth = date.getMonth()
let currentYear = date. getFullYear()
let currentHour = date.getHours();
let currentMinutes = date.getMinutes()
let arrayDays =  []
let i

if(currentDay > 9){
    for(i = currentDay - 5; i < currentDay; i++){
        arrayDays.push(i)    
    }
}

let USD = [
    {
        "id": 0,
        "name": "Business",
        "checked": true
    }
]

export default {
    data(){
        return{
            validar : false
        }
    },
    name: 'CurrencyChart',
    methods:{
        async atualiza() {
            this.validar = true
            link = await returnValor()
            console.log(arrayDays)
            arrayData = await getCurrencyValue(link)
            const ctx = document.getElementById('chart');

            let MycurrencyChartData = {
                type: "line",
                data: {
                labels: arrayDays,
                datasets: [
                    {
                    label: "Valor da moeda em relação ao real",
                    data: arrayData,
                    backgroundColor: "rgba(71, 183,132,.5)",
                    borderColor: "#47b784",
                    borderWidth: 3
                    },
                    {
                    label: "USD em BRL",
                    data: USDArray,
                    backgroundColor: "rgba(17, 110,216,.5)",
                    borderColor: "#rgba(17, 110,216,1)",
                    borderWidth: 3
                    }
                ]
                },
                options: {
                responsive: true,
                maintainAspectRatio: false,
                lineTension: 1,
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        beginAtZero: false,
                        padding: 25
                        }
                    }
                    ]
                }
                }
            };

            currencyChartData = new Chart(ctx, MycurrencyChartData);
            currencyChartData.data.datasets[1].hidden = true;
            currencyChartData.update();

        }, async getUSDarray(){
            
            USDArray = await getUSD()
            
            console.log(USDArray)
            currencyChartData.data.datasets[1].data = USDArray
            if (isShown == true){
                isShown = false
                console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb")
                currencyChartData.data.datasets[1].hidden = true;
            }
            else{
                isShown = true
                console.log("ahhhhhhhhhhhhhhhhh")
                currencyChartData.data.datasets[1].hidden = false;
            }
            currencyChartData.update();
        }
    },
  }

</script>