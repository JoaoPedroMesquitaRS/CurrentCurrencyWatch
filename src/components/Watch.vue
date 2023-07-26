<template>

    <div class="table">

        <thead>
            <tr>
                <th>Cod</th>
                <th>Name</th>
                <th>Max</th>
                <th>Min</th>
                <th>pctChange</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(quote, key) in quotes" :key="key">
                <td>{{ key }}</td>
                <td>{{ quote.name }}</td>
                <td>{{ quote.high }}</td>
                <td>{{ quote.low }}</td>
                <td>{{ quote.pctChange }}%</td>
            </tr>
        </tbody>

    </div>

</template>

<script>

export default{
    name: 'Wacth',
    props:{
        quotes:{
            type: Object,
            required: true
        }
    }
}

</script>

<style>

</style>