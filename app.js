new Vue({
    el: "#app",
    data: {
        listAlbums: [],

    }, mounted() {
        const ajaxAlmbus = []; 
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {
                ajaxAlmbus.push(response.data.response);
                this.listAlbums = ajaxAlmbus;
                console.log(this.listAlbums)
                    
                })


    },

    methods:{
    
    }

})