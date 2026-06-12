angular.module('dashboardApp').component('viewToggle', {
    bindings: {
        currentView: '<',
        onChange: '&'
    },
    template: `
        <div class="flex items-center gap-0.5">
            <button type="button" 
                    ng-click="$ctrl.onChange({view: 'card'})"
                    ng-class="$ctrl.currentView === 'card' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="p-1.5 rounded-md transition-colors focus:outline-none"
                    title="Card View">
                <!-- Activity / Spikemeter icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            </button>
            <button type="button" 
                    ng-click="$ctrl.onChange({view: 'list'})"
                    ng-class="$ctrl.currentView === 'list' ? 'bg-blue-100 text-blue-900' : 'text-gray-700 hover:bg-gray-200'"
                    class="p-1.5 rounded-md transition-colors focus:outline-none"
                    title="List View">
                <!-- List icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
