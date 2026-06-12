angular.module('dashboardApp', [])
.controller('MainController', function() {
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
});
