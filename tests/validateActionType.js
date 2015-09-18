import { expect } from 'chai'

import validateActionName from './../src/validateActionType'
import describeThrow from './describeThrow'

describe('validateActionName()', () => {
  describe('when action type', () => {
    let describeValidateActionNameThrow

    describeValidateActionNameThrow = (when, message, value) => {
      describeThrow(when, message, () => {
        validateActionName(value)
      })
    }

    describeValidateActionNameThrow(
      'does not consist only of uppercase alphabetical characters and underscores',
      'Action definition object "type" property value must consist only of uppercase alphabetical characters and underscores.',
      {
        type: 'lowercase'
      }
    )
  })
})