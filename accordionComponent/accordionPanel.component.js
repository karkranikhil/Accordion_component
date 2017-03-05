angular.module("accordionModule").component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        require: {
            "parent": "^accordion"
        },
        transclude: true,
        controllerAs: "model",
        controller: function() {
            var model = this;
            model.selected = false;

            model.$onInit = function() {
                model.parent.addPanel(model);
            };

            model.select = function() {
                model.parent.selectPanel(this);  
            };

            model.turnOn = function() {
                model.selected = true;
            };

            model.turnOff = function() {
                model.selected = false;
            };
        },
        templateUrl:"accordionPanel-template.html"
    });

