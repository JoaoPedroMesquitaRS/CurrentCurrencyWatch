<template>
    
    <div class="w-full bg-blue-400 flex flex-col items-center gap-5 pt-8 pb-24">
        <div class="flex flex-col items-center">
            <span v-if="cValue" class="text-3xl">{{cValue}} Reais</span>
            <span v-else class="text-3xl">Selecione uma moeda</span>
            <p v-if="stringName">1 {{stringName}} hoje {{currentTime}}</p>
            <p v-else>-</p>
        </div>

        <div id="buttonCur" class="flex gap-5 items-center">
            <label for="">Selecione a moeda:</label>
            <select @change="onChange($event)">
                <option>-</option>
                <option v-for="(quote, key) in quotes" :key="key" :value="quote.key">{{quote.code}}</option>
            </select>

            <!-- <div class="flex bg-zinc-300 rounded-3xl items-center">
                <div class="bg-white rounded-l-3xl px-3 py-2 flex gap-2">
                    <span class="px-2 bg-black rounded-full">-</span>
                    <p class="">{{this.choosed}}</p>
                </div>
                <span class="px-3 pl-3 pr-12">{{cValue}}</span>
            </div>

            <div class="flex bg-zinc-300 rounded-3xl items-center">
                <div class="bg-white rounded-l-3xl px-3 py-2 flex gap-2">
                    <span class="px-2 bg-black rounded-full">-</span>
                    <p class="">USD</p>
                </div>
                <span class="px-3 pl-3 pr-12">1,00</span>
            </div> -->

        </div>

    </div>

    <div id="chartMain" class="bg-zinc-300 w-full items-center flex flex-col">
        <CurrChart v-if="renderComponent" />
        
    </div>
</template>

<script>

const date = new Date();
let currentDay = date.getDate()
let currentMonth = date.getMonth()
let currentYear = date. getFullYear()
let currentHour = date.getHours();
let currentMinutes = date.getMinutes()

let currentTime = `${currentDay}/${currentMonth}/${currentYear} - ${currentHour}:${currentMinutes}`;

let code
let globall

import CurrChart from './CurrChart.vue'
import api from '../server/api.js'
import Calculator from './Calculator.vue'
import { nextTick, ref } from 'vue';
const renderComponent = ref(true);

let valor

async function returnValor(){
    let globalValor = globall
    return globalValor
}
export {returnValor}

export default{
    data(){
        return{
            choosed : String,
            cValue : false,
            stringName : false,
            renderComponent,
            currentTime
        }
    },
    props:{
        quotes:{
            type: Object,
            required: true,
        }
    },
    methods:{
        onChange: async function (event) {
            this.choosed = event.target.value;
            await this.getCurrencyValue()
            
        },
        async getCurrencyValue(){
            const response = await api.all();
            const data = response.data;
            valor = this.choosed
            globall = this.choosed
            let globalValor = this.choosed
            const teste = data.valueOf()
            let i
            await getValor(valor)
           
            for (i in teste.valueOf()){
                if (valor == i){
                    const res = await fetch(`https://economia.awesomeapi.com.br/json/${i}`);
                    const datah = await res.json();
                    let stringV = JSON.stringify(datah)
                    stringV = stringV.split(",")
                    
                    let stringName = stringV[2]
                    stringName = stringName.split('"')
                    stringName = stringName[3]
                    this.stringName = stringName

                    stringV = stringV[7]
                    stringV = stringV.split('"')
                    stringV = stringV[3]
                    
                    this.cValue = stringV
                    return valor
                }
            }
        }
    },
    mounted(){
        this.getCurrencyValue()
    },
    components:{
        Calculator,
        CurrChart
    }
}

async function getValor(valor){
    code = valor
    return code    
}

export {code}

</script>

<style>

</style>