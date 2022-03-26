<template>
    <v-row justify="center" align="center" >
        <v-col xl="8" cols="10">
            <v-row justify="center" align="center">
                <v-col>
                    <v-card flat color="transparent">
                        <v-card-text v-text="text" class="text-justify"/>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'MastText',
    props: { 
        text: {
            type: String,
            default: '',
        }
    }
}
</script>

<style>

</style>