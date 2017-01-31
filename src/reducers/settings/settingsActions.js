import { EDIT_SETTING } from '../../constants/actionTypes';

export function editSetting(setting) {
  return {
    type: EDIT_SETTING,
    setting: setting
  };
}
