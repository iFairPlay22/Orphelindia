<template>
    <v-row justify="center" align="center" >
        <v-col xl="8" sm="10" xs="12">
            <v-row justify="center" align="center">
                <v-col class="px-0">
                    <v-card flat color="transparent">
                        <v-card-text class="text-justify">
                            <EditableText
                                :text="text"
                                :inline="false"
                            />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import EditableText from "@/components/text/EditableText";

export default {
    name: 'MastText',
    components: { EditableText },
    props: { 
        text: {
            id: Number,
            fr: String,
            en : String
        }
    }
}
</script>

<style>

</style>