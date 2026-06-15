angular.module('dashboardApp').component('dateDropdown', {
    bindings: {
        selected: '<',
        onChange: '&'
    },
    template: `
        <div class="dropdown">
            <button class="btn-custom dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="min-width: 110px; justify-content: space-between; border: 1px solid var(--theme-border); background: white;">
                {{$ctrl.selected}}
            </button>
            <ul class="dropdown-menu">
                <li ng-repeat="option in $ctrl.options">
                    <button type="button" 
                            class="dropdown-item" 
                            ng-class="{'active-view': $ctrl.selected === option}"
                            ng-click="$ctrl.selectOption(option)">
                        {{option}}
                    </button>
                </li>
            </ul>
        </div>
    `,
    controller: function () {
        this.options = ['YTD', '360 Days', '180 Days', '90 Days', '60 Days', '30 Days', '7 Days'];

        this.selectOption = function (option) {
            this.onChange({ range: option });
        };
    }
});
