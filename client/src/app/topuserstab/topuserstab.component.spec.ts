/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopuserstabComponent } from './topuserstab.component';

describe('TopuserstabComponent', () => {
  let component: TopuserstabComponent;
  let fixture: ComponentFixture<TopuserstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopuserstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopuserstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
