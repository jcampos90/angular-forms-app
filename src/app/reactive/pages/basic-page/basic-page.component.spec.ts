import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPageComponent } from './basic-page.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BasicPageComponent', () => {
  let component: BasicPageComponent;
  let fixture: ComponentFixture<BasicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicPageComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
