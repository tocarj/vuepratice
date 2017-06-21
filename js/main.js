var app = new Vue({
    el:'#app',
    data:{
        message:'Você carregou esta página às' + new Date(),
        todos:[
        {id:0, text: 'Aprender Vue'},
        {id:1, text: 'Aprender Python'},
        {id:2, text: 'Aprender Docker'}]
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');

        }

    }

});