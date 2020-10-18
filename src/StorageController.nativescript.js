/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

// When there is no native storage interface, we default to an in-memory map
import CoreManager from './CoreManager';
const StorageController = {
  async: 0,

  getStorage(): any {
    return CoreManager.getAsyncStorage();
  },

  getItem(path: string): ?string {
    return this.getStorage().getItem(path);
  },

  setItem(path: string, value: string) {
    try {
      this.getStorage().setItem(path, value);
    } catch (e) {
      // Quota exceeded, possibly due to Safari Private Browsing mode
      console.log(e.message);
    }
  },

  removeItem(path: string) {
    this.getStorage().removeItem(path);
  },

  getAllKeys() {
    return this.getStorage().getAllKeys(path);
  },

  clear() {
    this.getStorage.clear();
  }
};

module.exports = StorageController;

