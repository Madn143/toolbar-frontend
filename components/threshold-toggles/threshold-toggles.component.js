angular.module('dashboardApp').component('thresholdToggles', {
    bindings: {
        model: '<',
        onChange: '&'
    },
    template: `
        <div class="d-flex align-items-center gap-2">
            <button type="button" 
                    ng-click="$ctrl.toggle('under60')"
                    ng-class="{'active-success': $ctrl.localModel.under60}"
                    class="btn-custom"
                    title="Under 60%">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>&lt; 60%</span>
            </button>

            <button type="button" 
                    ng-click="$ctrl.toggle('between60And80')"
                    ng-class="{'active-warning': $ctrl.localModel.between60And80}"
                    class="btn-custom"
                    title="60-80%">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>60-80%</span>
            </button>

            <button type="button" 
                    ng-click="$ctrl.toggle('over80')"
                    ng-class="{'active-danger': $ctrl.localModel.over80}"
                    class="btn-custom"
                    title="Over 80%">
                <div class="status-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>&gt; 80%</span>
            </button>
        </div>
    `,
    controller: function () {
        this.$onInit = function () {
            this.localModel = angular.copy(this.model) || {
                under60: false,
                between60And80: false,
                over80: false
            };
        };
        this.$onChanges = function (changes) {
            if (changes.model && !changes.model.isFirstChange()) {
                this.localModel = angular.copy(this.model);
            }
        };
        this.toggle = function (key) {
            this.localModel[key] = !this.localModel[key];
            this.onChange({ thresholds: this.localModel });
        };
    }
});
