/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {NgModule} from '@angular/core';
import {MdCommonModule} from '@angular/material/core';
import {MdProgressSpinner, MdSpinner} from './progress-spinner';


@NgModule({
  imports: [MdCommonModule],
  exports: [MdProgressSpinner, MdSpinner, MdCommonModule],
  declarations: [MdProgressSpinner, MdSpinner],
})
class MdProgressSpinnerModule {}

export {MdProgressSpinnerModule};
