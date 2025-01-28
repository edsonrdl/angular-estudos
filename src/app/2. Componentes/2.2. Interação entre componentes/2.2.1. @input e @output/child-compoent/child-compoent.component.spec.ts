import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildCompoentComponent } from './child-compoent.component';
import { By } from '@angular/platform-browser';

describe('ChildCompoentComponent', () => {
  let component: ChildCompoentComponent;
  let fixture: ComponentFixture<ChildCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCompoentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir a mensagem recebida do pai via @Input', () => {
    component.messageFromParent = 'Mensagem Teste do Pai';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const messageParagraph = compiled.querySelector('p');

    expect(messageParagraph?.textContent).toContain('Mensagem Teste do Pai');
  });

  it('deve emitir um evento com @Output quando o botão for clicado', () => {
    spyOn(component.messageToParent, 'emit'); // Espião para monitorar o método emit

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.messageToParent.emit).toHaveBeenCalledWith('Olá,Pai!');
  });
});
