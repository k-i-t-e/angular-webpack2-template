'use strict'

themes.$inject = ['$mdThemingProvider'];

export default function themes($mdThemingProvider) {
    $mdThemingProvider.theme('default');
    $mdThemingProvider.theme('blue').backgroundPalette('blue-grey');
}