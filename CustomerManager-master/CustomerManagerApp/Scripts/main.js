require.config({
    baseUrl: '',
    urlArgs: 'v=1.0'
});

require(
    [
        'app/customersApp/animations/listAnimations',
        'app/app',
        'app/customersApp/directives/wcUnique',
        'app/customersApp/services/routeResolver',
        'app/customersApp/services/config',
        'app/customersApp/services/customersBreezeService',
        'app/customersApp/services/authService',
        'app/customersApp/services/customersService',
        'app/customersApp/services/dataService',
        'app/customersApp/services/modalService',
        'app/customersApp/services/httpInterceptors',
        'app/customersApp/filters/nameCityStateFilter',
        'app/customersApp/filters/nameProductFilter',
        'app/customersApp/controllers/navbarController',
        'app/customersApp/controllers/orders/orderChildController',
    ],
    function () {
        angular.bootstrap(document, ['app/customersApp']);
    });
