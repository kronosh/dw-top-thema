'use strict';

/* Controllers */

function RssCtrl($scope, $resource) {
    $scope.rss = $resource('http://pipes.yahoo.com/pipes/pipe.run?_id=54f72f86176762dc83f150229028448a&:_render&:_callback',
        {_render:'_render=json', _callback:'_callback=JSON_CALLBACK'},
        {get:{method:'JSONP'}});

    $scope.retrieve = function () {
        $scope.rssResult = $scope.rss.get();
    };
}