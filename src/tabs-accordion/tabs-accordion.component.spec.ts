import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAccordionComponent } from './tabs-accordion.component';

describe('TabsAccordionComponent', () => {
  let component: TabsAccordionComponent;
  let fixture: ComponentFixture<TabsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
