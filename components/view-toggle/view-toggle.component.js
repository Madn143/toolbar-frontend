angular.module('dashboardApp').component('viewToggle', {
    bindings: {
        currentView: '<',
        onChange: '&'
    },
    template: `
        <div class="d-flex align-items-center gap-1">
            <button type="button" 
                    ng-click="$ctrl.onChange({view: 'card'})"
                    ng-class="{'active-view': $ctrl.currentView === 'card'}"
                    class="btn-icon-only"
                    title="Card View">
                <!-- Activity / Spikemeter icon -->
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            </button>
            <button type="button" 
                    ng-click="$ctrl.onChange({view: 'list'})"
                    ng-class="{'active-view': $ctrl.currentView === 'list'}"
                    class="btn-icon-only"
                    title="List View">
                <!-- List icon -->
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
            </button>
        </div>
    `
});
