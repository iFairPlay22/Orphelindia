<template>
    <div>
        <MastTitle
            :title="firstPart.title"
        />

        <MastText
            :text="firstPart.text"
        />
    </div>  
</template>

<script>
import MastTitle from "@/components/common/MastTitle";
import MastText from "@/components/common/MastText";

export default {
    name: "Donation",
    head: { titleTemplate: "%s - Donation" },
    components: { MastTitle, MastText },
    data() {
        return {
            firstPart: {
                title: "Work in progress... 👷",
                text: "This page is still under construction. Please come back later."
            },
        };
    }
}
</script>

<style>

</style>