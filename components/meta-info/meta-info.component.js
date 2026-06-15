angular.module('dashboardApp').component('metaInfo', {
    bindings: {
        lastUpdated: '<',
        rowsCurrent: '<',
        rowsTotal: '<'
    },
    template: `
        <div class="d-flex align-items-center gap-3 ms-auto ps-4 small text-secondary">
        <!-- MAYAPERUMAL-->
            <div class="d-flex align-items-center gap-1 text-primary refresh-icon" 
                 ng-click="$ctrl.handleRefresh()"
                 ng-class="{'is-spinning': $ctrl.isRefreshing}"
                 style="cursor: pointer; transition: color 0.2s ease;" 
                 title="Refresh">
                <svg class="svg-icon" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </div>
            <span>Last Updated {{ $ctrl.lastUpdated }}</span>
            <div class="divider" style="height: 12px; margin: 0;"></div>
            <span>Rows: {{ $ctrl.rowsCurrent }} of {{ $ctrl.rowsTotal }}</span>
        </div>
    `,
    controller: function($timeout) {
        this.isRefreshing = false;

        this.handleRefresh = function() {
            if (this.isRefreshing) return;
            this.isRefreshing = true;

            // Spin for 1 second when clicked to visually indicate a refresh action
            $timeout(() => {
                this.isRefreshing = false;
            }, 1000);
        };
    }
});
