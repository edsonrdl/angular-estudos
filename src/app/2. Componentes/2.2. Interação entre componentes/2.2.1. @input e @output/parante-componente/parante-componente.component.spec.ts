import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParanteComponenteComponent } from './parante-componente.component';
import { ChildCompoentComponent } from '../child-compoent/child-compoent.component';
import { By } from '@angular/platform-browser';

describe('ParanteComponenteComponent', () => {
  let component: ParanteComponenteComponent;
  let fixture: ComponentFixture<ParanteComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParanteComponenteComponent, ChildCompoentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParanteComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Inicializa o ciclo de vida do componente
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve passar a mensagem do pai para o filho via @Input', () => {
    const childDebugElement = fixture.debugElement.query(By.directive(ChildCompoentComponent));
    const childComponent = childDebugElement.componentInstance as ChildCompoentComponent;

    expect(childComponent.messageFromParent).toBe('Olá, Filho!');
  });

  it('deve capturar o evento emitido pelo filho via @Output', () => {
    const childDebugElement = fixture.debugElement.query(By.directive(ChildCompoentComponent));
    const childComponent = childDebugElement.componentInstance as ChildCompoentComponent;

    // Simula o envio de um evento do componente filho
    childComponent.messageToParent.emit('Teste de Mensagem do Filho');
    fixture.detectChanges(); // Atualiza o estado do componente pai

    expect(component.messageFromChild).toBe('Teste de Mensagem do Filho');
  });

  it('deve exibir a mensagem do filho no template', () => {
    component.messageFromChild = 'Mensagem para exibir no template';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const messageParagraph = compiled.querySelector('p');

    expect(messageParagraph?.textContent).toContain('Mensagem para exibir no template');
  });
});
