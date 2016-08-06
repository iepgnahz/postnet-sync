/**
 * Created by zhangpei on 16/8/3.
 */

import BarcodeAction from '../../client/actions/BarcodeAction';

describe('BarcodeAction', ()=> {
  describe('doAction', ()=> {
    it('should jump back to init action', ()=> {
      let transform = jasmine.createSpy('spy');
      let output = jasmine.createSpy('spy');
      let action = new BarcodeAction();
      action.doAction('q', transform, output);
      expect(transform).toHaveBeenCalledWith('init', output);
    })
  })
});