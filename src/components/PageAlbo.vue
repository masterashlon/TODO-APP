<template>
  <v-container
        fluid
        fill-height
    >
    <v-row 
        class="row justify-center align-center"
    >
        <v-col cols="30" md="3">
                <v-row
                    class="text-h6 justify-start mb-2 ml-1"
                >   <span>DATA: </span>
                    <span
                        class="ml-2 mr-1"
                    > {{ dataComic.day }} -</span>    
                    <span
                        class="mr-1"
                    >{{ dataComic.month }} -</span>    
                    <span>{{ dataComic.year }}</span>    

                </v-row>
                <v-row
                    class="text-h6 justify-start mb-3 ml-1"
                >   <span>TITOLO:</span>
                    <span
                        class="ml-1 mr-2"
                    > {{ dataComic.title }}</span>    

                </v-row>
                <v-row>

                    <v-img
                        relative
                        :alt="dataComic.alt"
                        class="shrink"
                        contain
                        :src="dataComic.img"
                        transition="scroll-x-transition"
                        width="830"
                    >
                        <p
                            absolute
                            class="text-h5 text-pos ml-4"
                        >NUMERO: {{ dataComic.num }}</p>
                        <v-btn
                            small
                            fab
                            class="absolute-center left-pos"
                            v-on:click="changeComic('left')"
                        >
                            <v-icon
                                color="cyan lighten-2"
                                large
                            >mdi-chevron-left-circle-outline</v-icon>
                        </v-btn>
                        <v-btn
                            small
                            fab
                            class="absolute-center right-pos"
                            v-on:click="changeComic('right')"
                        >
                            <v-icon
                                color="cyan lighten-2"
                                large
                            >mdi-chevron-right-circle-outline</v-icon>
                        </v-btn>
                    </v-img>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'PageAlbo',

        data: () => ({
            dataComic: {},
            numberComic: 100,
            lastComic: null
        }),
        methods: {
            changeComic(direction) {
                if(direction == "right") {

                    if(this.numberComic >= this.lastComic) //prevent 404page on comic source
                        return

                    this.numberComic++
                    this.fetchComic()
                } else {

                    if(this.numberComic <= 1) //prevent 404page on comic source
                        return

                    this.numberComic--
                    this.fetchComic()
                }
            },
            async fetchComic() {
                try {
                    const response = await axios.get("https://cors-anywhere.herokuapp.com/http://xkcd.com/" + this.numberComic + "/info.0.json")
                    const lastComicResponse = await axios.get("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json")
                    this.lastComic = lastComicResponse.data.num
                    const data = response.data
                    this.dataComic = {
                        day: data.day,
                        month: data.month,
                        year: data.year,
                        title: data.safe_title,
                        num: data.num,
                        img: data.img,
                        alt: data.alt
                    }
                } catch(error) {
                    console.error('Error fetching data:', error);
                }
            }
        },
        mounted () {
            this.fetchComic()
        }
    }
</script>

<style scoped>
.absolute-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: .7;
}
.left-pos {
    left: 0;
}
.right-pos {
    right: 0;
}

.text-pos {
    color: fuchsia;
}
</style>