import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  it('should be truthy', () => {
    let dropdownMenu = new DropdownMenuComponent();
    expect(app).toBeTruthy();
  });

  it('should calculate', () => {
    let dropdownMenu = new DropdownMenuComponent();
    expect(app.total).toBe(1);
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should get movie list onInit')
});
