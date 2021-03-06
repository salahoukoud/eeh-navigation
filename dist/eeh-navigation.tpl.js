angular.module('eehNavigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation/eeh-navigation.html',
    "<nav class=\"navbar navbar-default navbar-static-top eeh-navigation\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"navbar-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\">\r" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <a ng-if=\"_navbarBrand.state && !_navbarBrand.href\" class=\"navbar-brand\" ui-sref=\"{{ _navbarBrand.state }}\">\r" +
    "\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <a ng-if=\"!_navbarBrand.state && _navbarBrand.href\" class=\"navbar-brand\" ng-href=\"{{ _navbarBrand.href }}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"nav navbar-top-links navbar-left\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            class=\"dropdown\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "    <ul class=\"nav navbar-top-links navbar-right\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            class=\"dropdown\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "    <div collapse=\"isNavbarCollapsed\">\r" +
    "\n" +
    "        <div class=\"navbar-default sidebar\" role=\"navigation\">\r" +
    "\n" +
    "            <div class=\"sidebar-nav navbar-collapse\">\r" +
    "\n" +
    "                <ul class=\"nav\">\r" +
    "\n" +
    "                    <li class=\"sidebar-search\" ng-show=\"!_sidebarTextCollapse.isCollapsed && _sidebarSearch.isVisible\">\r" +
    "\n" +
    "                        <form ng-submit=\"_sidebarSearch.submit()\">\r" +
    "\n" +
    "                            <div class=\"input-group\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control search-input\" placeholder=\"{{'Search'|translate}}\"\r" +
    "\n" +
    "                                       ng-model=\"_sidebarSearch.model\">\r" +
    "\n" +
    "                                <span class=\"input-group-btn\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default\" type=\"submit\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-search\"></i>\r" +
    "\n" +
    "                                    </button>\r" +
    "\n" +
    "                                </span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </form>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li ng-repeat=\"item in sidebarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                        ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "                        ng-if=\"item._isVisible()\"></li>\r" +
    "\n" +
    "                    <li ng-click=\"toggleSidebarTextCollapse()\" ng-if=\"_sidebarTextCollapse.isVisible && isSidebarVisible()\">\r" +
    "\n" +
    "                        <a>\r" +
    "\n" +
    "                            <span class=\"fa fa-fw\"\r" +
    "\n" +
    "                                  ng-class=\"_sidebarTextCollapse.isCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'\"></span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"eeh-navigation-page-wrapper\" ng-class=\"{ 'sidebar-invisible': !isSidebarVisible() }\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-12\">\r" +
    "\n" +
    "            <div ng-transclude></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-brand.html\">\r" +
    "\n" +
    "    <img ng-if=\"_navbarBrand.src\" ng-src=\"{{_navbarBrand.src}}\">\r" +
    "\n" +
    "    <span ng-if=\"_navbarBrand.text\">{{ _navbarBrand.text|translate }}</span>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\" ui-sref-active=\"active\" eeh-active-parent-menu-item>\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\" eeh-active-parent-menu-item></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\" eeh-active-parent-menu-item></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.hasChildren()\" class=\"dropdown-toggle\" eeh-is-active-menu-item>\r" +
    "\n" +
    "        <span class=\"fa fa-fw {{ item.iconClass }}\"></span>\r" +
    "\n" +
    "        <span> {{ item.text|translate }}</span>\r" +
    "\n" +
    "        <span class=\"fa fa-caret-down\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"item.hasChildren()\" class=\"dropdown-menu\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()|orderBy:'weight'\"\r" +
    "\n" +
    "            ng-class=\"{'divider': item.isDivider}\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/sidebar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\" ui-sref-active=\"active\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\"\r" +
    "\n" +
    "       ng-click=\"item.isCollapsed = !item.isCollapsed\">\r" +
    "\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\r" +
    "\n" +
    "        <span class=\"navbar-right sidebar-arrow fa fa-fw\"\r" +
    "\n" +
    "              ng-class=\"item.isCollapsed ? 'fa-chevron-left' : 'fa-chevron-down'\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\" collapse=\"item.isCollapsed\" class=\"nav\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/menu-item-content.html\">\r" +
    "\n" +
    "    <span class=\"menu-item-icon fa fa-fw {{ item.iconClass}}\"></span>\r" +
    "\n" +
    "    <span class=\"menu-item-text\"> {{ item.text|translate }}</span>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );

}]);
