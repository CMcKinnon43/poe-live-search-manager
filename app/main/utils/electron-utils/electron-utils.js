import { Notification, BrowserWindow, clipboard } from "electron";
import * as storeUtils from "../../../shared/utils/StoreUtils/StoreUtils";
import { storeKeys } from "../../../shared/resources/StoreKeys/StoreKeys";
import * as javaScriptUtils from "../../../shared/utils/JavaScriptUtils/JavaScriptUtils";

export const doNotify = ({ title, body }) => {
  new Notification({
    title,
    body,
  }).show();
};

export const getWindowByName = name => {
  const allWindows = BrowserWindow.getAllWindows();

  return allWindows.find(window => window.getTitle() === name);
};

export const send = (windowName, event, payload) => {
  const window = getWindowByName(windowName);

  if (javaScriptUtils.isDefined(window)) {
    window.webContents.send(event, payload);
  }
};

export const copy = text => {
  if (storeUtils.isEnabled(storeKeys.COPY_WHISPER)) {
    clipboard.writeText(text);
  }
};
