const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect
const actions = require('../../../../ui/app/actions')

module.exports = connect(mapStateToProps)(PrivateKeyImportView)

function mapStateToProps (state) {
  return {
    error: state.appState.warning,
  }
}

inherits(PrivateKeyImportView, Component)
function PrivateKeyImportView () {
  Component.call(this)
}

PrivateKeyImportView.prototype.render = function () {
  const { error } = this.props

  return (
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px 30px 0px 30px',
      },
    }, [
      h('span', 'Paste your private key string here'),

      h('input.large-input.letter-spacey', {
        type: 'password',
        id: 'private-key-box',
        onKeyPress: this.createKeyringOnEnter.bind(this),
        style: {
          width: '100%',
          marginTop: 12,
          border: '1px solid #e2e2e2',
        },
      }),

      h('button', {
        onClick: this.createNewKeychain.bind(this),
        style: {
          margin: 20,
        },
      }, 'Import'),

      error ? h('span.error', error) : null,
    ])
  )
}

PrivateKeyImportView.prototype.createKeyringOnEnter = function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    this.createNewKeychain()
  }
}

PrivateKeyImportView.prototype.createNewKeychain = function () {
  const input = document.getElementById('private-key-box')
  const privateKey = input.value
  this.props.dispatch(actions.importNewAccount('Private Key', [ privateKey ]))
    // JS runtime requires caught rejections but failures are handled by Redux
    .catch()
}
