angular.module('dashboardApp').component('statusFilters', {
    bindings: {
        model: '<',
        onChange: '&'
    },
    template: `
        <div class="flex items-center gap-0.5">
            <button type="button" 
                    ng-click="$ctrl.toggle('active')"
                    ng-class="$ctrl.localModel.active ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                Active
            </button>
            <button type="button" 
                    ng-click="$ctrl.toggle('inactive')"
                    ng-class="$ctrl.localModel.inactive ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                Inactive
            </button>
            <button type="button" 
                    ng-click="$ctrl.toggle('notExpired')"
                    ng-class="$ctrl.localModel.notExpired ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="px-2 py-1.5 rounded-md text-sm transition-colors focus:outline-none">
                Not Expired
            </button>
        </div>
    `,
    controller: function() {
        this.$onInit = function() {
            this.localModel = angular.copy(this.model) || {
                active: false,
                inactive: false,
                notExpired: false
            };
        };
        this.$onChanges = function(changes) {
            if (changes.model && !changes.model.isFirstChange()) {
                this.localModel = angular.copy(this.model);
            }
        };
        this.toggle = function(key) {
            this.localModel[key] = !this.localModel[key];
            this.onChange({statuses: this.localModel});
        };
    }
});
