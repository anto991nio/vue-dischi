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
        sort(list){
            list.sort(function(albumA,albumB){
                const dateA = moment(albumA.year,"YYYY");
                const dateB = moment(albumB.year, "YYYY");

                if(dateA.isAfter(dateB)){
                    return 1;
                }else if(dateA.isBefore(dateB)){
                    return -1;
                }
                return 0;
            })
            return list
        }
    
    }

})