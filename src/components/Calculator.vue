<template>

    <div class="items-center flex flex-col" >
        
        <h1 class="text-2xl">calculadora</h1>
        <div class="flex gap-10 items-center">
            <div class="flex flex-col">
                <label for="">Valor em {{ stringName }}</label>
                <input id="valorUm" type="text" name="">
                
                <label for="">Valor em R$</label>
                <input type="text" id="valorDois" for="">
            </div>
            <button class="bg-blue-400 h-12 rounded-lg px-3" v-on:click="calcular()">Calcular</button>
        </div>

    </div>
</template>

<script>

export default{
    name: "Calculator",
    return:{
        valorUm : Number,
        valorDois : Number
    },
    methods:{
        async calcular(){

            let valorUm = document.getElementById("valorUm").value
            let valorDois = document.getElementById("valorDois").value
            let valorTres = this.valorQuatro

            if (1 > valorTres){
                console.log("01111")
                let z = 1 / valorTres;

                let y = valorUm / z 
                console.log(y)
                document.getElementById("valorDois").value = y
            }else{
                let z = 1 / valorTres;

                let y = valorUm / z 
                console.log(y)
                document.getElementById("valorDois").value = y
            }
        } 

    },
    props:{
        valorQuatro : Number,
        stringName : String
    }
}

    
</script>

<style>


</style>