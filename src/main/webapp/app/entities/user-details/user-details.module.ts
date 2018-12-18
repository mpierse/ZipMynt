import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipMyntSharedModule } from 'app/shared';
import {
    UserDetailsComponent,
    UserDetailsDetailComponent,
    UserDetailsUpdateComponent,
    UserDetailsDeletePopupComponent,
    UserDetailsDeleteDialogComponent,
    userDetailsRoute,
    userDetailsPopupRoute
} from './';

const ENTITY_STATES = [...userDetailsRoute, ...userDetailsPopupRoute];

@NgModule({
    imports: [ZipMyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        UserDetailsComponent,
        UserDetailsDetailComponent,
        UserDetailsUpdateComponent,
        UserDetailsDeleteDialogComponent,
        UserDetailsDeletePopupComponent
    ],
    entryComponents: [UserDetailsComponent, UserDetailsUpdateComponent, UserDetailsDeleteDialogComponent, UserDetailsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipMyntUserDetailsModule {}