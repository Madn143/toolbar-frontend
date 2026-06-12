angular.module('dashboardApp').component('metaInfo', {
    bindings: {
        lastUpdated: '<',
        rowsCurrent: '<',
        rowsTotal: '<'
    },
    template: `
        <div class="flex items-center gap-3 text-xs text-gray-500 ml-auto pl-4">
        <!-- MAYAPERUMAL-->
            <div class="flex items-center gap-1 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors" title="Refresh">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>
            <span>Last Updated {{ $ctrl.lastUpdated }}</span>
            <div class="w-px h-3 bg-gray-300"></div>
            <span>Rows: {{ $ctrl.rowsCurrent }} of {{ $ctrl.rowsTotal }}</span>
        </div>
    `
});
