var app = new Vue({
    el: "#app",
    data: {
        mensaje: "Hola Mundo!",
        visto: true,
        deshabilitado: true,
        compras:  [
            { nombre: "Laptop", precio: 999.99, stock: 10 },
            { nombre: "Monitor", precio: 765.99, stock: 2 },
            { nombre: "Mouse", precio: 12.99, stock: 4 },
            { nombre: "Teclado", precio: 40.99, stock: 5 },
        ],
        url: "#top"
    },
    methods:  {
        aumentarStock: function(args) {
            console.log("Aumentar Stock!");
            console.log(args);
        },
        invertirMensaje: function() { 
            this.mensaje = this.mensaje.split('').reverse().join('')
        },
        cargarStock: function() {
            stock = this.$http.get("https://gist.githubusercontent.com/IsaacGonzalez/c583809c34ad52b1ebdc516ffccacc43/raw/b78e3f009cf0dc37c129b823bfd814d141ba4470/compras.json")
            console.log(stock)

        }
    },
    computed: {
        fecha: function(){
            return Date.now()
        },
        articulos_count: function(){
            return this.compras.length;
        }
    }
})

