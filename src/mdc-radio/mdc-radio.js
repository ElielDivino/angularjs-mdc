import {arrayUnion} from '../util/array-union';
import {BaseComponent} from '../util/base-component';
import {IsFormFieldChild} from '../mdc-form-field/child-mixin';

import {MDCRadio} from '@material/radio';

import template from './mdc-radio.html';


/**
 * @ngdoc component
 * @name mdcRadio
 * @module mdc.radio
 *
 * @param {string} [inputId] The id for the inner input element (use with <label for=>)
 * @param {string} [ngModel] Assignable AngularJS expression to data-bind to.
 * @param {expression} [ngValue] AngularJS expression to which ngModel will be be set when
 *        the radio is selected.
 * @param {expression} [ngDisabled] Enable/Disable based on the expression
 *
 */
class MDCRadioController extends IsFormFieldChild(BaseComponent) {
  static get name() {
    return 'mdcRadio';
  }

  static get template() {
    return template;
  }

  static get bindings() {
    return Object.assign({
      inputId: '@?',
      ngDisabled: '<?',
      ngModel: '=?',
      ngValue: '<?',
    }, super.bindings);
  }

  static get $inject() {
    return arrayUnion(['$element'], super.$inject);
  }

  constructor(...args) {
    super(...args);

    this.$element.addClass('mdc-radio');
    this.mdc = new MDCRadio(this.$element[0]);
  }

  $onChanges(changes) {
    super.$onChanges(changes);

    if (changes.ngDisabled) {
      this.mdc.disabled = this.ngDisabled;
    }
  };

  $onDestroy() {
    super.$onDestroy();

    this.mdc.destroy();
  }
}


/**
 * @ngdoc module
 * @name mdc.radio
 * @description
 *
 * Radio
 */
angular
  .module('mdc.radio', [])
  .component(MDCRadioController.name, {
    controller: MDCRadioController,
    bindings: MDCRadioController.bindings,
    require: MDCRadioController.require,
    template: MDCRadioController.template,
  });
