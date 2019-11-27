import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | eletrodomesticos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:eletrodomesticos');
    assert.ok(route);
  });
});
