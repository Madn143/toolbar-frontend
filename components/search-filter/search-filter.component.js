angular.module('dashboardApp').component('searchFilter', {
    bindings: {
        tags: '<',
        onAddTag: '&',
        onRemoveTag: '&'
    },
    template: `
        <div class="search-input-wrapper flex-grow-1">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span ng-repeat="tag in $ctrl.tags track by $index" class="search-chip">
                {{tag}}
                <button type="button" ng-click="$ctrl.onRemoveTag({tag: tag})" title="Remove Tag">
                    <svg style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </span>
            <input type="text" 
                   ng-model="$ctrl.inputValue" 
                   ng-keydown="$ctrl.handleKeydown($event)"
                   placeholder="{{$ctrl.tags.length === 0 ? 'Search...' : ''}}">
        </div>
    `,
    controller: function () {
        this.inputValue = '';
        this.handleKeydown = function (event) {
            if (event.key === 'Enter' && this.inputValue.trim()) {
                event.preventDefault();
                this.onAddTag({ tag: this.inputValue.trim() });
                this.inputValue = '';
            } else if (event.key === 'Backspace' && !this.inputValue && this.tags && this.tags.length > 0) {
                this.onRemoveTag({ tag: this.tags[this.tags.length - 1] });
            }
        };
    }
});
