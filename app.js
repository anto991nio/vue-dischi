new Vue({
    el: "#app",
    data: {
        listAlbums: [],

    }, mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {
                this.listAlbums =  response.data.response;
                })


    },

    methods:{
    
    }

})