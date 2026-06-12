angular.module('dashboardApp').component('search', {
    bindings: {
        tags: '<',
        onAddTag: '&',
        onRemoveTag: '&'
    },
    template: `
        <div class="flex items-center flex-1 min-w-[200px] h-8 rounded-md hover:bg-gray-100 focus-within:bg-gray-100 transition-colors px-2">
            <svg class="w-4 h-4 text-gray-500 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div class="flex items-center gap-1.5 overflow-x-auto flex-1" style="-ms-overflow-style: none; scrollbar-width: none;">
                <span ng-repeat="tag in $ctrl.tags track by $index" 
                      class="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                    {{tag}}
                    <button type="button" class="hover:text-gray-900 focus:outline-none" ng-click="$ctrl.onRemoveTag({tag: tag})">
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </span>
                <input type="text" 
                       ng-model="$ctrl.inputValue" 
                       ng-keydown="$ctrl.handleKeydown($event)"
                       placeholder="{{$ctrl.tags.length === 0 ? 'Search...' : ''}}"
                       class="flex-1 min-w-[60px] bg-transparent border-none text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 p-0 m-0">
            </div>
        </div>
    `,
    controller: function() {
        this.inputValue = '';
        this.handleKeydown = function(event) {
            if (event.key === 'Enter' && this.inputValue.trim()) {
                event.preventDefault();
                this.onAddTag({tag: this.inputValue.trim()});
                this.inputValue = '';
            } else if (event.key === 'Backspace' && !this.inputValue && this.tags && this.tags.length > 0) {
                this.onRemoveTag({tag: this.tags[this.tags.length - 1]});
            }
        };
    }
});
