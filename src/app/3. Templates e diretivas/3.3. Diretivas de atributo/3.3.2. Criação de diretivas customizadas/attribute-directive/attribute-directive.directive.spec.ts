import { AttributeDirectiveDirective } from './attribute-directive.directive';

describe('AttributeDirectiveDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } ;
    const directive = new AttributeDirectiveDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
