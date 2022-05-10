<template>
    <v-row justify="center" align="center" >
        <v-col xl="8" sm="10" xs="12">
            <v-row justify="center" align="center">
                <v-col class="px-0">
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