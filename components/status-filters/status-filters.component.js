angular.module('dashboardApp').component('statusFilters', {
    bindings: {
        model: '<',
        onChange: '&'
    },
    template: `
        <div class="d-flex align-items-center gap-2">
            <button type="button" 
                    ng-click="$ctrl.toggle('active')"
                    ng-class="{'active-primary': $ctrl.localModel.active}"
                    class="btn-custom"
                    title="Active">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Active</span>
            </button>

            <button type="button" 
                    ng-click="$ctrl.toggle('inactive')"
                    ng-class="{'active-primary': $ctrl.localModel.inactive}"
                    class="btn-custom"
                    title="Inactive">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Inactive</span>
            </button>

            <button type="button" 
                    ng-click="$ctrl.toggle('notExpired')"
                    ng-class="{'active-primary': $ctrl.localModel.notExpired}"
                    class="btn-custom"
                    title="Not Expired">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Not Expired</span>
            </button>
        </div>
    `,
    controller: function () {
        this.$onInit = function () {
            this.localModel = angular.copy(this.model) || {
                active: false,
                inactive: false,
                notExpired: false
            };
        };
        this.$onChanges = function (changes) {
            if (changes.model && !changes.model.isFirstChange()) {
                this.localModel = angular.copy(this.model);
            }
        };
        this.toggle = function (key) {
            this.localModel[key] = !this.localModel[key];
            this.onChange({ statuses: this.localModel });
        };
    }
});
