import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { ZipMyntSharedLibsModule, ZipMyntSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZipMyntSharedLibsModule, ZipMyntSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
  entryComponents: [JhiLoginModalComponent],
  exports: [ZipMyntSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipMyntSharedModule {
  static forRoot() {
    return {
      ngModule: ZipMyntSharedModule
    };
  }
}
