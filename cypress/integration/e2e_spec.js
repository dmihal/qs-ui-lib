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
    // TODO - FAILING Input text
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

describe('Modal', () => {
  it('Can be opened', () => {

    cy.visit(getLocation('Modal'))
    
    const MODAL_IDS = ['XYZ','ZZZ','ABC']
    const triggerToggleSelector = (val) => 'label.toggleModal[for="modal-trigger-'+val+'"]'
    
    const modalSelector = ' ~ .modal'
    const modalOverlaySelector = ' .modal-overlay'
    const modalCloseBtnSelector = ' .close'
    const modalCloseBlurSelector = ' .o-close'

    MODAL_IDS.map((val) => {
      // Relative Modal
      if(MODAL_IDS[0] === val){
        const currentToggle = triggerToggleSelector(val)
        cy.get(currentToggle)
          .click()
          .click()
      }
      // Fullscreen Modal
      if(MODAL_IDS[1] === val || MODAL_IDS[2] === val){
        const currentToggle = triggerToggleSelector(val)
        cy.get(currentToggle).click()
        cy.get(currentToggle + modalSelector + modalOverlaySelector + modalCloseBtnSelector).click()
      }
      
      // Any case - test for blur close
      // TODO - Write Blur based tests
      // const currentToggle = triggerToggleSelector(val)
      // CYPRESS VISIBLITY DOCS
      // https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#An-element-is-considered-hidden-if
      // https://docs.cypress.io/guides/references/assertions.html#Visibility 
    })
  })
})