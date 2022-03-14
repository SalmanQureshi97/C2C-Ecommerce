import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFormComponent } from './photos-form.component';

describe('PhotosFormComponent', () => {
  let component: PhotosFormComponent;
  let fixture: ComponentFixture<PhotosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
