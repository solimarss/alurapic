import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//Torna disponivel as diretivas do Angula como: *ngFor
import { CommonModule } from '@angular/common';

import { PhotoComponent} from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';


@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent 
    ],
    imports: [
        HttpClientModule,
        CommonModule
      ]
})
export class PhotosModule {

}