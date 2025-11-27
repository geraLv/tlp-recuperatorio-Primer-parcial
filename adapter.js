var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.addItem = function (nombre, tipo) {
        console.log(nombre, tipo);
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function () {
    function Adapter(adaptee) {
        this.adaptee = adaptee;
    }
    Adapter.prototype.añadirItem = function (nombre, tipo) {
        this.adaptee.addItem(nombre, tipo);
    };
    return Adapter;
}());
var viejo = new Adaptee();
var nuevo = new Adapter(new Adaptee());
viejo.addItem("mesa", "madera");
nuevo.añadirItem("mesa", "madera");
