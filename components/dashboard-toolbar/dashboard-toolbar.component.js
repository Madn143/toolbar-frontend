angular.module('dashboardApp').component('dashboardToolbar', {
    template: `
        <div class="d-flex align-items-center gap-2 w-100 toolbar-wrapper">
            <view-toggle 
                current-view="$ctrl.state.currentView" 
                on-change="$ctrl.updateView(view)">
            </view-toggle>
            
            <div class="divider"></div>
            
            <search-filter 
                tags="$ctrl.state.searchTags" 
                on-add-tag="$ctrl.addSearchTag(tag)" 
                on-remove-tag="$ctrl.removeSearchTag(tag)">
            </search-filter>
            
            <div class="divider"></div>
            
            <date-dropdown 
                selected="$ctrl.state.dateRange" 
                on-change="$ctrl.updateDateRange(range)">
            </date-dropdown>
            
            <div class="divider"></div>
            
            <threshold-toggles 
                model="$ctrl.state.thresholds" 
                on-change="$ctrl.updateThresholds(thresholds)">
            </threshold-toggles>
            
            <div class="divider"></div>
            
            <status-filters 
                model="$ctrl.state.statuses" 
                on-change="$ctrl.updateStatuses(statuses)">
            </status-filters>
            
            <meta-info 
                last-updated="$ctrl.state.meta.lastUpdated" 
                rows-current="$ctrl.state.meta.rowsCurrent" 
                rows-total="$ctrl.state.meta.rowsTotal">
            </meta-info>
        </div>
    `,
    controller: function () {
        this.$onInit = function() {
            this.state = {
                currentView: 'card',
                searchTags: ['Autocad', 'Enterprise'],
                dateRange: '360 Days',
                thresholds: {
                    under60: true,
                    between60And80: false,
                    over80: false
                },
                statuses: {
                    active: true,
                    inactive: false,
                    notExpired: true
                },
                meta: {
                    lastUpdated: '10:45 AM',
                    rowsCurrent: 450,
                    rowsTotal: 1200
                }
            };
        };

        this.updateView = function(view) {
            this.state.currentView = view;
        };
        this.addSearchTag = function(tag) {
            if (tag && !this.state.searchTags.includes(tag)) {
                this.state.searchTags.push(tag);
            }
        };
        this.removeSearchTag = function(tag) {
            this.state.searchTags = this.state.searchTags.filter(t => t !== tag);
        };
        this.updateDateRange = function(range) {
            this.state.dateRange = range;
        };
        this.updateThresholds = function(thresholds) {
            this.state.thresholds = angular.copy(thresholds);
        };
        this.updateStatuses = function(statuses) {
            this.state.statuses = angular.copy(statuses);
        };
    }
});
