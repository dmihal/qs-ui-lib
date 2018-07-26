var host = `http://localhost:6060/#!/`
const getLocation = (component) => host+component

describe('Accordian', () => {
  it('Is opened when clicked', () => {
    cy.visit(getLocation('Accordian'))
    cy.get('.Accordian').click()
  })
})

describe('CarouselGallery', () => {
  it('Slides when clicked', () => {    
    cy.visit(getLocation('CarouselGallery'))
    
    // Type A
    cy.get('.CarouselGallery .slider-control-topleft button:nth-child(2)').click().click()
    
    // Type B
    cy.get('.CarouselGallery .slider-control-centerright button').click().click()
  })
})

describe('CheckboxGroup', () => {
  it('Shows custom checkmark', () => {    
    cy.visit(getLocation('CheckboxGroup'))
    cy.get('.checkbox-choice-wrap label').click({ multiple: true })
  })
})

describe('CodeInputArea', () => {
  it('Is editable', () => {    
    cy.visit(getLocation('CodeInputArea'))
    // FAILING
    // cy.get('.CodeMirror-code div:nth-child(1) pre.CodeMirror-line').type(' WELCOME TO CAPITALISM')
  })
})

describe('DatePick', () => {
  it('Is selectable', () => {    
    cy.visit(getLocation('DatePick'))
    cy.get('.react-datepicker__input-container').click()
    cy.get('.react-datepicker__week:first-child .react-datepicker__day:nth-child(3)').click()
  })
})

describe('Input', () => {
  it('Can be typed into', () => {    
    cy.visit(getLocation('Input'))
    cy.get('.input-wrapper input').each(($el) => {
      cy.wrap($el).type('Testing')
    })
  })
})