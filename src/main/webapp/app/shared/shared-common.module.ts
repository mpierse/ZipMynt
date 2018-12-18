import { NgModule } from '@angular/core';

import { ZipMyntSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZipMyntSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZipMyntSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZipMyntSharedCommonModule {}
