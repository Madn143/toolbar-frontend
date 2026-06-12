angular.module('dashboardApp').component('dateDropdown', {
    bindings: {
        selected: '<',
        onChange: '&'
    },
    template: `
        <div class="relative" ng-class="{'z-20': $ctrl.isOpen}">
            <button type="button" 
                    ng-click="$ctrl.toggle()"
                    class="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none">
                <span class="font-medium truncate">{{$ctrl.selected}}</span>
                <svg class="w-3.5 h-3.5 text-gray-600 transition-transform" ng-class="{'rotate-180': $ctrl.isOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <!-- Dropdown Menu -->
            <div ng-show="$ctrl.isOpen" class="absolute left-0 mt-1 w-32 bg-white border border-gray-200 rounded shadow-md py-1 z-30">
                <button type="button" 
                        ng-repeat="option in $ctrl.options"
                        ng-click="$ctrl.selectOption(option)"
                        class="w-full text-left px-3 py-1.5 text-sm transition-colors"
                        ng-class="{'bg-blue-50 text-blue-900 font-medium': $ctrl.selected === option, 'text-gray-700 hover:bg-gray-100': $ctrl.selected !== option}">
                    {{option}}
                </button>
            </div>
            
            <!-- Backdrop -->
            <div ng-show="$ctrl.isOpen" ng-click="$ctrl.close()" class="fixed inset-0 z-20"></div>
        </div>
    `,
    controller: function() {
        this.options = ['YTD', '360 Days', '180 Days', '90 Days', '60 Days', '30 Days', '7 Days'];
        this.isOpen = false;
        
        this.toggle = function() {
            this.isOpen = !this.isOpen;
        };
        
        this.close = function() {
            this.isOpen = false;
        };
        
        this.selectOption = function(option) {
            this.onChange({range: option});
            this.isOpen = false;
        };
    }
});
