import { NgModule } from '@angular/core';

import { ZipmyntSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZipmyntSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZipmyntSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZipmyntSharedCommonModule {}
