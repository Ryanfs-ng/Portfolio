import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSpace } from './projects-space';

describe('ProjectsSpace', () => {
  let component: ProjectsSpace;
  let fixture: ComponentFixture<ProjectsSpace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSpace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSpace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
