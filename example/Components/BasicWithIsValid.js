/* @flow */
import React from 'react'
import Revalidation from '../../src/'
import SimpleForm from './SimpleForm'
import { basicValidationRules } from '../validationRules'

export default class BasicWithIsValid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {form: {name: '', random: ''}}
  }

  render() {
    return (
      <div>
        <SimpleForm
          onSubmit={this.props.onSubmit}
          initialState={this.state.form}
          rules={basicValidationRules}
          validateSingle={false}
          validateOnChange={true}
          disableButtonOption
        />
      </div>
    )
  }
}
