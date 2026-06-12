angular.module('dashboardApp').component('thresholdToggles', {
    bindings: {
        model: '<',
        onChange: '&'
    },
    template: `
        <div class="flex items-center gap-0.5">
            <button type="button" 
                    ng-click="$ctrl.toggle('under60')"
                    ng-class="$ctrl.localModel.under60 ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span>&lt; 60%</span>
            </button>
            <button type="button" 
                    ng-click="$ctrl.toggle('between60And80')"
                    ng-class="$ctrl.localModel.between60And80 ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span>60-80%</span>
            </button>
            <button type="button" 
                    ng-click="$ctrl.toggle('over80')"
                    ng-class="$ctrl.localModel.over80 ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                <span class="w-2 h-2 rounded-full bg-red-500"></span>
                <span>&gt; 80%</span>
            </button>
        </div>
    `,
    controller: function() {
        this.$onInit = function() {
            this.localModel = angular.copy(this.model) || {
                under60: false,
                between60And80: false,
                over80: false
            };
        };
        this.$onChanges = function(changes) {
            if (changes.model && !changes.model.isFirstChange()) {
                this.localModel = angular.copy(this.model);
            }
        };
        this.toggle = function(key) {
            this.localModel[key] = !this.localModel[key];
            this.onChange({thresholds: this.localModel});
        };
    }
});
