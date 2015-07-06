System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Demo Pages';
            config.map([{ route: ['', 'welcome'], moduleId: 'remote-data', nav: true, title: 'Remote Data' }, { route: 'local', moduleId: 'local-data', nav: true, title: 'Local Data' }, { route: 'templates', moduleId: 'column-templates', nav: true, title: 'Column Templates' }, { route: 'selection', moduleId: 'row-selection', nav: true, title: 'Selection' }, { route: 'mutation', moduleId: 'datasource-mutation', nav: true, title: 'Datasource Mutation' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0FBQzVCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLGFBQWEsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxhQUFhLEVBQUUsRUFDeEYsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRSxZQUFZLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLEVBQy9FLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRyxRQUFRLEVBQUUsa0JBQWtCLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsa0JBQWtCLEVBQUUsRUFDL0YsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFHLFFBQVEsRUFBRSxlQUFlLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFFLEVBQ3JGLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRyxRQUFRLEVBQUUscUJBQXFCLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMscUJBQXFCLEVBQUUsQ0FDdEcsQ0FBQyxDQUFDOztBQUVGLGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWlUsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==